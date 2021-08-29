/*
 * Title: Uptime monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');

// app object
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Listening to port ${environment.port}`);
    });
};

// handle req, res
app.handleReqRes = handleReqRes;

// Start server
app.createServer();
