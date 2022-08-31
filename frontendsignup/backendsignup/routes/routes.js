// this file is responsible for routing the requests that comes to our server

const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels'); //importing the schema
const bcrypt = require('bcrypt'); 

// in a signup application the type of request a user is submitting when they click "signup" or "submit" is a post request 
router.post('/signup', async (req, res) => {

    //make the password more secure by:
    const saltPassword = await bcrypt.genSalt(10) //first salt the password
    const securePassword = await bcrypt.hash(req.body.password, saltPassword) //then hash the password that the user has sent, and then salt that password

    // grab the information that the user enters and save the user
    const signedUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: securePassword //now the password thats stored in mongodb is a new hashed and salted password (random signs and letters)
    })
    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
})

module.exports = router;