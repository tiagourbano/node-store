'use strict'

// Custom app.
const app = require('../src/app');

// Imports 3rd party application.
const http = require('http');

// Set port.
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

// Create server.
const server = http.createServer(app);
server.listen(port);


function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}