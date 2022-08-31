// using mongoose to create the schema

const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true 
    },
    // the date field will not be displayed on the front end. only accessible through the backend
    date:{
        type: Date,
        default: Date.now
    }
});

// the first argument is the name of your table, the second arg is the name of the schema
module.exports = mongoose.model('mytable', signUpTemplate)