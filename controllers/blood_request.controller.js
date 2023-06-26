const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const blood = require('./auth.controller');
const brequest = require('../models/blood_request')
const Admin = require('../models/Admin')
const Donor = require('../models/Donor')
const Patient = require('../models/Patient')

const{ ADMIN, DONOR, PATIENT} = require('../constants/roles')

exports.bloodrequest = (req,res) =>{
    const{_id,role} = req.user;
    if(role === PATIENT)
    {
        const request = new brequest({
            BloodType: Patient.bloodType
        })    
    }
    
}

