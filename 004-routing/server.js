// Importing our packages

const express = require('express');
const cors = require('cors');

// Initialising app as the express function
const app = express();

// Common middleware
app.use(express.json());
app.use(cors());

//  Import the route (as lizardRoutes) into the server.js

const lizardRoutes = require('./routes/lizardRoutes.js');

// Tells server to use this route - use middleware to do this
// If any requests begin with /lizard use the lizardRoutes route file

app.use('/lizard', lizardRoutes);



// The app listening function is at the bottom
// Making a new variable called server, it is equal to app listening on a port 5015
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});
