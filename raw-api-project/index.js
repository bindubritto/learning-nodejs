/*
* Title: Uptime monitoring Application
* Description: A RESTFul API to monitor up or down time of user defined links
*/


// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
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
app.handleReqRes = handleReqRes;

// Start server
app.createServer();