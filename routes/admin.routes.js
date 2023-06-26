const admincontroller = require('../controllers/admin.controller');
const authorization = require("../Middlewares/authorization")

module.exports = function(app)
{
    app.get('/bloodbank/patients',authorization,admincontroller.findAllPatient);
    app.get('/bloodbank/donors',authorization,admincontroller.findAllDonor);
}