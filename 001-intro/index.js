// Import Express package as a variable called express
const express = require('express');

// Making a variable called app that is equal to express
const app = express();

// Making a new variable called server, it is equal to app listening on a port 5015
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});