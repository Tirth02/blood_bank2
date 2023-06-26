const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

mongoose
    .connect("mongodb://localhost:27017/blood_bank")
    .then(() => console.log('Connected to Db!'))
    .catch(error => console.log(error))

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

require("./routes/auth.routes")(app)
require("./routes/admin.routes")(app)
require("./routes/donation.routes")(app)
app.listen(3701,() => console.log("Listening at localhost: 3701"))

module.exports = app