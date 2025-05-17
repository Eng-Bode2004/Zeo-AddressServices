const express = require('express');
const router = express.Router();
const StoreAddressController = require('../Controllers/StoreAddressControllers');

// Route: POST /api/store-address/:storeId
router.post('/:storeId', StoreAddressController.createAddress);

module.exports = router;
