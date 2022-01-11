const express = require('express');
const cors = require('cors');
const audiRoutes = require('./routes/audiRoutes')

// Importing in the mongoose stuff
const mongoose = require('mongoose');

// initialising app as express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// let dbURI = "garage"; // current usable DB
let dbURI = "testGarage" // Test DB

// Database connection - URI is similar to a URL, it is a link to a service through in internet
// Connect to the mongoDB with - mongoose.connect(uri)

// MongoDB URI - mongoose.connect('mongodb://localhost:27017') then database name

mongoose.connect(`mongodb://localhost:27017/${dbURI}`,{useNewUrlParser: true}, 
(error) => {
    if(error) { 
        console.log("Can't connect to the database")
    } else if (!error) {
        console.log("Connected to database");
    }
});

// Adding our routes
app.use('/audi', audiRoutes);


// Add error handling middleware - Adding in err
// when a route says next(err) - it will find the next middleware with (err) as a parameter

app.use((err, req, res, next) => {
    console.log(err.stack);
    //err.message = string added when creating error in first place
    res.status(500).send(err.message);
});


// The app is listening on port 5015
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});

module.exports = server;