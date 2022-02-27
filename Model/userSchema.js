const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MyModel = mongoose.model('user', new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{versionKey: false , collection: 'users information'}));

module.exports = MyModel;