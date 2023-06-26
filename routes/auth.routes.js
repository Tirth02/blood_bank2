const authController = require("../controllers/auth.controller");

module.exports = function(app)
{
    app.post('/bloodbank/auth/signup/:role',authController.signUp)
    app.post('/bloodbank/auth/signin/:role',authController.signIn)
}