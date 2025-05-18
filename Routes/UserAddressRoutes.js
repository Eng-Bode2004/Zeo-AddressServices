const express = require('express');
const router = express.Router();
const UserAddressController = require('../Controllers/UserAddressControllers');

// Route: POST /api/store-address/:storeId
router.post('/:UserId', UserAddressController.createAddress);

module.exports = router;
