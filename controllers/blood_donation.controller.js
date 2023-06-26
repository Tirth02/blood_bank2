const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const donation = require('../models/blood_donations');
const Admin = require('../models/Admin')
const Donor = require('../models/Donor')
const Patient = require('../models/Patient')

const{ ADMIN, DONOR, PATIENT} = require('../constants/roles')

exports.create = (req,res) => {
    const{DonorName,Disease,Age,BloodGroup,Unit,Status,Actions} = req.body;

    const log = new donation({
        DonorName,
        Disease,
        Age,
        BloodGroup,
        Unit,
        Status,
        Actions
    });

    log
        .save()
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send({message: error.message}))
}