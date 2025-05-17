const AddressService = require('../Services/StoreAddressServices');

class StoreAddressController {
    async createAddress(req, res) {
        try {
            const { storeId } = req.params;
            const { longitude, latitude } = req.body;

            if (!storeId || longitude == null || latitude == null) {
                return res.status(400).json({
                    status: 'failure',
                    message: 'storeId, longitude, and latitude are required.'
                });
            }

            const address = await AddressService.createStoreAddress(storeId, { longitude, latitude });

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

module.exports = new StoreAddressController();
