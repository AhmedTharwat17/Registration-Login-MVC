const express = require('express')
const Users = require('./Routes/Users')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/registerUser',{useNewUrlParser: true, useUnifiedTopology: true});

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs');


Users(app)

app.use((err, req, res, next)=>{
    res.status(422).send({error: err.message})
})

module.exports = app

