const express = require('express');

// Creates the app
const app = express();

// Sends the index.html when receiving HTTP GET /
app.get('/', (req, res) => {
    res.sendFile('public/index.html', {root: __dirname});
});

//Make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Cart app listening at http://localhost:${port}`);
});
