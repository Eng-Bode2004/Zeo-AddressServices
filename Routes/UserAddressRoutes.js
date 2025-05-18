const express = require('express');
const router = express.Router();
const UserAddressController = require('../Controllers/UserAddressControllers');

// Route: POST /api/store-address/:storeId
router.post('/:userId', UserAddressController.createAddress);

module.exports = router;
