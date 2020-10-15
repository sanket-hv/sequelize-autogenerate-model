const Sequelize = require('sequelize');
const express = require('express')
const app = express()

//Getting database connection with sequelize
const sequelize = new Sequelize('dbname', 'uname', 'pass',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    })

//like that we can import the models
//Here we need to pass the db connection as a sequelize and Sequelize.DataTypes
const Customer = require('./models/Customer')(sequelize, Sequelize.DataTypes)
const Admin = require('./models/Admin')(sequelize, Sequelize.DataTypes)


//GET:   http://localhost:8000/admin
app.get('/admin', (req, res) => {
    Admin.findAll()
        .then(customer => {
            return res.status(200).json(customer)
        })
        .catch(error => {
            console.error(error.message)
        })
})

app.listen(8000, () => {
    console.log("Server running on 8000")
})