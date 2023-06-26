const mongoose = require('mongoose')

const { ADMIN } = require('../constants/roles')

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: ADMIN
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Admins',AdminSchema)

