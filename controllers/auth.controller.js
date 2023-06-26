const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Admin = require('../models/Admin')
const Donor = require('../models/Donor')
const Patient = require('../models/Patient')

const{ ADMIN, DONOR, PATIENT} = require('../constants/roles')

exports.signUp = async(req,res) => {
    const { role } = req.params
    const { firstName, lastName, email, password} = req.body

    const isEmailExistInAdmins = await Admin.findOne({ email });
    const isEmailExistInDonor = await Donor.findOne({ email });
    const isEmailExistInPatient = await Patient.findOne({ email });

    if(isEmailExistInAdmins || isEmailExistInDonor || isEmailExistInPatient)
    {
        return res.status(400).send({
            message: 'The email address is already in use by another account.'
        })
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password,salt)

    if(role === DONOR) {
        const donor = new Donor({
            firstName,
            lastName,
            email,
            bloodType,
            password: hash
        })

        const token = jwt.sign({_id: donor._id, role}, process.env.JWT_SECRET)

        donor
            .save()
            .then(data => {
                const user = data.toObject()
                delete user.password
                res.status(201).send({user, token})
            })
            .catch(error => res.status(400).send({
                message: "Internal Server Error!"
            }))
    }
    else if(role == PATIENT)
    {
        const patient = new Patient({
            firstName,
            lastName,
            email,
            bloodType,
            password: hash
        })
        
        const token = jwt.sign({ _id: patient._id, role}, process.env.JWT_SECRET)

        patient
            .save()
            .then(data => {
                const user = data.toObject()
                delete user.password
                res.status(201).send({user, token})
            })
            .catch(error => res.status(400).send({
                message: "Internal Server Error!"
            }))
    }
    else if(role == ADMIN)
    {
        const admin = new Admin({
            firstName,
            lastName,
            email,
            password: hash
        })
        
        const token = jwt.sign({ _id: admin._id, role}, process.env.JWT_SECRET)

        admin
            .save()
            .then(data => {
                const user = data.toObject()
                delete user.password
                res.status(201).send({user, token})
            })
            .catch(error => res.status(400).send({
                message: "Internal Server Error!"
            }))
    }
}
const signInRole = async(roleModel, role, req, res) =>{
    const {email,password} = req.body

    const user = await roleModel.findOne({ email });
    if(!user)
    {
        return res.status(400).send({
            message: 'There is no user record corresponding to this identifier'
        });
    }

    const checkPassword = bcrypt.compareSync(password,user.password);
    if(!checkPassword)
    {
        return res.status(400).send({message: 'The password is Invalid.'});
    }

    const token = jwt.sign({_id: user._id,role}, process.env.JWT_SECRET);

    const userData = user.toObject();
    delete userData.password;

    res.status(200).send({user: userData, token});
}
exports.signIn = async(req,res) =>{
    const {role} = req.params

    if(role === ADMIN)
    {
        await signInRole(Admin,role,req,res);
    }
    else if(role === DONOR)
    {
        await signInRole(Donor,role,req,res);
    }
    else
    {
        await signInRole(Patient,role,req,res);
    }
}