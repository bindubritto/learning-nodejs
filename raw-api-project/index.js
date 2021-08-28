/*
 * Title: Uptime monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
// const data = require('./lib/data');

// data.create('test', 'test', 'Bangladesh', (err) => {
//     console.log('error', err);
// });

// data.read('test', 'test', (err, data) => {
//     console.log(err, data);
// });

// data.update('test', 'test', { country: 'Bangladesh' }, (err) => {
//     console.log('error', err);
// });

// data.delete('test', 'test', (err) => {
//     console.log('err', err);
// });

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
