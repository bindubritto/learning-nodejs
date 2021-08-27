/*
* Title: Not found handler
* Description: 404 not found handler
*/

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        error: 'Not found'
    })
};

module.exports = handler;
