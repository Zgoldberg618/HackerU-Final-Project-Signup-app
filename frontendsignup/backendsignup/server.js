//this is the server.js file. it needs to be conneted to everything. this is wehre all the listening happens
//when a user sends a request to the application it gets to this file first and then the server.js file sends 
//that request to our routes.js file which has the router.post route which processes that post request and sends back a response
//this wouldn't be possible though, unless we connect it to our server.js file which is "listening" on port 4000 for any request that
//comes to the application


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');

//using .env to access the database_access that has our credentials from mongodb
dotenv.config()

//using the connect function to connect to mongodb and then connecting to the .env file that has our credentials
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Mongodb is connected"))

//middlewares
app.use(express.json()) //activates body parser in our application
app.use(cors()) //initialize cors
app.use('/app', routesUrls) //whatever path that is in routesUrls which is our routes.js file, will be appended to the path '/app' for ex:/app/signup
app.listen(4000, () => console.log("server is up and running"))