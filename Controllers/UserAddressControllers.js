const AddressService = require('../Services/UserAddressServices');

class UserAddressController {
    async createAddress(req, res) {
        try {
            const { userId } = req.params;
            const { longitude, latitude } = req.body;

            if (!userId || longitude == null || latitude == null) {
                return res.status(400).json({
                    status: 'failure',
                    message: 'userId, longitude, and latitude are required.'
                });
            }

            const address = await AddressService.createUserAddress(userId, { longitude, latitude });

            res.status(201).json({
                status: 'success',
                message: 'Store address created successfully.',
                data: address
            });
        } catch (error) {
            res.status(500).json({
                status: 'failure',
                message: 'Failed to create address.',
                error: error.message
            });
        }
    }
}

module.exports = new UserAddressController();
