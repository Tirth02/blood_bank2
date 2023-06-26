const mongoose = require('mongoose');

const { DONOR } = require('../constants/roles')

const Schema = mongoose.Schema;

const DonationSchema = new Schema({
    DonorName: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    Disease: {
        type: String,
        trim: true,
        required: 'Type of Disease is required'
    },
    Age: {
        type: Number,
        trim: true,
        required: 'Age is required'
    },
    BloodGroup: {
        type: String,
        trim: true,
        required: 'Blood group is necessary'
    },
    Unit: {
        type: Number,
        trim: true,
        required: 'No of units is required'
    },
    RequestDate: {
        type: Date,
        default: Date.now
    },
    Status: {
        type: String,
        enum: ['APPROVED','PENDING','REJECTED'],
        required: true
    },
    Actions: {
        type: String,
        enum:['Approve','Reject'],
        required: true
    }
    
});

const Donations = mongoose.model('Donations', DonationSchema);

module.exports = Donations;