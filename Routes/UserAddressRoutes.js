const express = require('express');
const router = express.Router();
const UserAddressController = require('../Controllers/UserAddressControllers');

// Route: POST /api/store-address/:storeId
router.post('/:userId', UserAddressController.createAddress);

router.get('/:userId', UserAddressController.getAddress);
module.exports = router;
