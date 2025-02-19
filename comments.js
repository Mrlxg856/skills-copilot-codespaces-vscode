// Create web server
// 1. Load modules
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const qs = require('querystring');

// 2. Create server
http.createServer(function (req, res) {
    // 2.1. Get the path
    let pathname = url.parse(req.url).pathname;
    // 2.2. Log the request
    console.log(`Request for ${pathname} received.`);
    // 2.3. Read the file from the file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8080);
console.log('Server running at http://git add comments.js