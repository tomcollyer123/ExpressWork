const express = require('express');
const cors = require('cors');

// initialising app as express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// These will fire every time. (they will always run as they are at the top of this file)
app.use((req, res, next) => {
    console.log(new Date());
    next();
});

app.use((req, res, next) => {
    console.log("middleware fired");
    next();
});

// Importing in our routes
const audiRoutes = require('./audiRoutes.js');
const porscheRoutes = require('./porscheRoutes.js');


app.use('/audi', audiRoutes);
app.use('/porsche', porscheRoutes);


// The app is listening on port 5015
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});


