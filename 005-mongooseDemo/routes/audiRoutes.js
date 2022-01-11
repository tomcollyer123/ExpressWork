// This file will be concerned with the routes for my audi collection
// Contains all the HTTP requests
const audi = require('../persistence/models/audi');
const { Audi } = require('../persistence/models/audi')


// Importing express.router

const router = require('express').Router();

// When testing the routes we need to check
// what is the route responding with
router.get('/test', (req, res) => {
    res.status(201).send("Test path succesful!");
});

// // Import in nested middleware
// const nested = require('./middleware.js')

// All of our routes go below, and use router rather than app
// read all
// .find() returns all data
// pass in error first to access the data
router.get("/getAll", (req, res) => {
    Audi.find((error, audis) => {
    res.status(202).send(audis);
})
});

// get by id
router.get("/get/:id", (req, res) => {
    console.log(req.params.id);
    Audi.findById(req.params.id, (error, audi) => {
    res.status(202).send(audis);
    })
});

// create new audi
router.post('/post', (req, res, next) => {
    console.log(req.body);
    // pass the req body into the schema, generat a new audi object
    const audi = new Audi(req.body)
    // Using inbuilt save feature to save audi into database
    audi.save().then((result) => {
        res.status(201).send(`${result.model} added to the database`);
    })
    .catch((error) => {
        // Create an error object for us to 'handle'
        const err = new Error(`Object requires model to be entered`);

        // Pass our error to error handling middleware
        next(err);
    })
});

// update an audi
router.put('/update/:id', (req) => {
    console.log(req.params.id);
    res.status(201).send(`${req.params.id} has been updated`);
}); 

// // Update request using mongoose
// Audi.findByIdAndUpdate(id, body, (error) => {
//     response.status(201).send("has been updated");
// });  


// Using query params for delete, that means you don't need to specify in path (don't need the ID part)
// delete audi by ID
router.delete('/delete', (req, res) => {
    console.log(req.query);
    res.status(202).send(`file deleted`);
});

// OR DELETE CAN BE DONE LIKE THIS

router.delete('/deleteById/:id', (req, res) => {
    Audi.findByIdAndDelete(req.params.id, (error) => {
        res.status(202).send("car removed");
    })
});

// Export our router for server.js to use

module.exports = router;