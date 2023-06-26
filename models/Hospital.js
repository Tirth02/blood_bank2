const mongoose = require('mongoose')

const { HOSPITAL } = require('../constants/roles')

const HospitalSchema = mongoose.Schema({
    hospitalName: {
        type: String,
        trim: true,
        required: 'Hospital name is required'
    },
    address: {
        type: String,
        trim: true,
        required: 'Address is required'
    },
    city: {
        type: String,
        trim: true,
        required: 'City is required'
    },
    state: {
        type: String,
        trime: true,
        required: 'State is required'
    },
    zip: {
        type: Number,
        trim: true,
        required: 'Zip is required'
    },
    phone: {
        type: Number,
        trim: true,
        match: /\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/,
        required: 'Phone no is required'
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Hospitals',HospitalSchema)