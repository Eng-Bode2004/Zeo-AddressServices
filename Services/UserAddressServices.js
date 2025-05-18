const UserAddress = require('../Models/UserAddressModel');
const axios = require('axios');

class AddressService {
    async createUserAddress(userId, CoordinatesData) {
        try {
            const { longitude, latitude } = CoordinatesData;

            if (latitude == null || longitude == null) {
                return Promise.reject(new Error('Coordinates required'));
            }

            if (!userId) {
                return Promise.reject(new Error('userId required'));
            }

            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`;

            const response = await axios.get(url, {
                headers: {
                    'User-Agent': 'ZeoPlatformApp/1.0 (contact@yourapp.com)', // Always include contact info
                    'Accept-Language': 'en'
                }
            });

            const data = response.data;
            const address = data.address;

            if (!address) {
                return Promise.reject(new Error("Failed to retrieve address from coordinates"));
            }

            const street = address.road || address.pedestrian || "Unknown Street";
            const city = address.city || address.town || address.village || "Unknown City";
            const state = address.state || "Unknown State";
            const postalCode = address.postcode || "00000";
            const country = address.country || "Unknown Country";

            const newAddress = new UserAddress({
                userId: userId,
                street: street.trim(),
                city: city.trim(),
                state: state.trim(),
                postalCode: postalCode.trim(),
                country: country.trim(),
                location: {
                    type: "Point",
                    coordinates: [longitude, latitude]
                }
            });

            return await newAddress.save();

        } catch (error) {
            return Promise.reject(error);
        }
    }
}

module.exports = new AddressService();
