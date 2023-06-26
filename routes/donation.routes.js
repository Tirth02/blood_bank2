const donationController  = require('../controllers/blood_donation.controller');
const authorization = require('../Middlewares/authorization')

module.exports =  (app) => {
    app.post("/bloodbank/donations/",authorization,donationController.create);
}