// This file will be concerned with the routes for my porsche collection
// Contains all the HTTP requests


// Importing express.router

const router = require('express').Router();

// Import in nested middleware
const nested = require('./middleware.js')

// All of our routes go below, and use router rather than app
// read all
router.get("/getAll", nested, (req, res) => {
    console.log("read all porsche's");
    res.status(202).send("read all porsche's");
});
// get by id
router.get("/get/:id", (req, res) => {
    console.log(req.params.id);
    res.status(202).send(`document of ${req.params.id} requested`);
});
// create new porsche
router.post('/post', (req) => {
    console.log(req.body);
    res.status(201).send(`Here is the new porsche`);
});
// update an porsche
router.put('/update/:id', (req) => {
    console.log(req.params.id);
    res.status(201).send(`${req.params.id} has been updated`);
});
// Using query params for delete, that means you don't need to specify in path (don't need the ID part)
// delete audi by ID
router.delete('/delete', (req, res) => {
    console.log(req.query);
    res.status(202).send(`file deleted`);
});

// OR DELETE CAN BE DONE LIKE THIS

router.delete('/deleteById/:id', (req) => {
    console.log(req.params.id);
    res.status(202).send(`file deleted`);
});

// Export our router for server.js to use

module.exports = router;