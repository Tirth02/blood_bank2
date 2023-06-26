const Admin = require('../models/Admin');
const Patient = require('../models/Patient');
const Donor = require('../models/Donor')

const{ADMIN, PATIENT, DONOR} = require("../constants/roles")

exports.findAllPatient = (req,res) => {
    if(req.user.role !== ADMIN)
    {
        return res.status(401).send({message: 'Access Denied'})
    }
    Patient.find({})
            .then(patient => res.status(200).send(patient))
            .catch(error => res.status(400)
                            .send({message: "Internal Server Error!"}))
}

exports.findAllDonor = (req,res) => {
    if(req.user.role !== ADMIN)
    {
        return res.status(401).send({message: 'Access Denied'})
    }
    Donor.find({})
            .then(donor => res.status(200).send(donor))
            .catch(error => res.status(400)
                            .send({message: "Internal Server Error!"}))
}
 