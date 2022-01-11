const express = require('express');
const cors = require('cors');

// Initialise our express app
const app = express();

// Common Middleware - Middleware imported from NPM / Express
// Generally does a simple admin job

// To tell our app what to do when it recieves JSON files
app.use(express.json());

// CORS - Will prevent any unwanted CORS errors
app.use(cors());

// Middleware (uses app.use)
// Middleware `does something` then calls next()
// next() invokes the subsequent middleware (with next passed in)
// Whenever a request is made ALL middleware are fired

// Custom Middleware

app.use((req, res, next) => {
    console.log("First piece of middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Second piece of middleware");
    next();
});

// Nested Middlware
// Middlewares are arrow functions saved as variables
const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

const nested = (req, res, next) => {
    console.log("Nested middleware!");
    next();
}


// Request

// Request with nested middleware
// app.get("path", nested_middleware, arrow function on what it does)
app.get('/nested', logger, nested, (req, res) => {
    console.log("Request fired");
    res.send("nested middlware fired");
})

app.get('/' , (req, res) => {
    console.log("Basic middleware");
    res.send("site accessed!");
})

// app.post('/post', (req, res) => {
//     res.send("Posted data");
// })


// Create middleware that prints out nested
app.get('/nestedMiddleware', logger, nested, (req, res) => {
    console.log("Nested");
    res.send("Nested");
})


// The app listening function is at the bottom
// Making a new variable called server, it is equal to app listening on a port 5015
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});
