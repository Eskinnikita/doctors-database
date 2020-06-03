const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require('./Connection/sequelize')
const cors = require('cors')

const app = express();

const PatientsRoutes = require('./Routes/Patients')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors())

app.use('/patients', PatientsRoutes)


sequelize.sync()
    .then(() => {
        app.listen(8082, function () {
            console.log("Соединение установлено")
        })
    })
    .catch(err => console.log(err));