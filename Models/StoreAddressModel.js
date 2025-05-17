const mongoose = require('mongoose');

const StoreAddressSchema = new mongoose.Schema({
    StoreId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stores',
        required: true
    },
    street: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    postalCode: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
            required: true,
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true,
            validate: {
                validator: function (value) {
                    return value.length === 2 &&
                        value[0] >= -180 && value[0] <= 180 &&  // longitude
                        value[1] >= -90 && value[1] <= 90;      // latitude
                },
                message: 'Invalid coordinates [longitude, latitude]',
            },
        },
    },
}, { timestamps: true });

StoreAddressSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('StoreAddress', StoreAddressSchema);
