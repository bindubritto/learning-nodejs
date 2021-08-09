

// dependencies
const http = require('http');
const url = require('url');

// app object
const app = {};

// config
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
}

// handle req, res
app.handleReqRes = (req, res) => {

    // request handle

    // response handle
    res.end('Hello World');
}

// Start server
app.createServer();