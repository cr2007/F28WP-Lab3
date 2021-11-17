const express = require('express');

// Creates the app
const app = express();

// Sends an HTTP Response when receiving HTTP GET /

app.get('/', (req, res) => {
    res.send("Hello, your server is up and running");
});

//Make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Cart app listening at http://localhost:${port}`);
});
