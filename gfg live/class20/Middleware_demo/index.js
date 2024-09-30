const express = require("express");
const app = express();

// Middleware to log a message and pass control to the next middleware
app.use((req, res, next) => {
    console.log("Inside my first Middleware");
    next();
    console.log("This code will not be executed because next() was already called");
});

// Route handling for the root URL '/'
app.get('/', (req, res, next) => {
    res.send("Hello");
});

// Middleware to verify the API key
const verify = (req, res, next) => {
    const { apikey } = req.query; // Assuming the API key is passed as a query parameter

    if (apikey !== "orange") {
        return res.send("WRONG API KEY");
    }
    next(); // Continue to the next middleware or route handler
};

// Route handling for the '/secret' URL, using the verify middleware
app.get('/secret', verify, (req, res) => {
    res.send("Secret content");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is started on port 3000");
});
