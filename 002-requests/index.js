// Import Express package as a variable called express
const express = require('express');

// Making a variable called app that is equal to express
const app = express();

// Needed to parse JSON data so express can read it
app.use(express.json());

// A basic get request to return a console log
// app.METHOD("/path", whatRequestDoes() (as an arrow function))
app.get("/hello", () => {
    return console.log("site accessed!");
})

app.delete("/delete", () => {
    console.log("Deleted item!");
})

app.post("/post", () => {
    console.log("Item posted :)");
})

// Requests

// URL Params ID number, package name (Nodemon)
// Within the path if something has a colon before it that is the url param '/get/reece'
app.get('/get/:name', (req) => {
    // console.log(req);
    console.log(req.params);
    console.log(req.params.name);
})

// Query Params - ?species=lizard
app.get('/get', (req) => {
    console.log(req.query);
    console.log(req.query.species);
})

// Request body - Form data
app.post('/newSnake', (req, res) => {
    console.log("========================");
    const body = req.body;
    console.log(body);
    // res.send("hello");
})

// Delete request
app.delete('/deleteById/:id', (req) => {
    console.log(req.params.id);
});

// GET request
app.get('/get', (req) => {
    console.log(req.query);
    console.log(req.query.species);
});

// Create request
app.post('/newSnake', (req) => {
    console.log("========================");
    const body = req.body;
    console.log(body);
});

// Update Request
app.put('/update/:id', (req) => {
    console.log(req.params);
    console.log(req.body);
});


// Responses to data 

app.get('/helloThere/:name', (req, res) => {
    const name = req.params.name;
    res.status(202).send(`Hey ${name}, this is from the backend ( ͡° ͜ʖ ͡°)`);
});

app.get('/error', (req, res) => {
    res.status(500).send("uh oh.. ");
})




// The app listening function is at the bottom
// Making a new variable called server, it is equal to app listening on a port 5015
const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});

