const mongoose = require('mongoose');

const { DONOR } = require('../constants/roles')

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    BloodType: {
        type: String,
        enum:['AB+','B+','O-','O+','B-','AB-'],
        required: 'Blood type is required'
    }
})
module.exports = mongoose.model('brequest',RequestSchema);