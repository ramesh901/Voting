/*var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(router.route, handle);
*/
const http = require('http')
const url = require('url')
const fs = require('fs')

const path = require('path')


http.createServer(function (req, res) {
    
    let pathname = '.' + url.parse(req.url).pathname
    console.log('pathname is',pathname)
    const mimeType = {
        '.html': 'text/html',
        '.json': 'application/json',
        '.css': 'text/css'
    }
   
    if (fs.statSync(pathname).isDirectory()) {
        pathname += 'adminSummary.html'
        console.log("pathname for html",pathname)
    }
    fs.readFile(pathname,'utf8', function (err, data) {
        if (err) throw err
        else {
            const ext = path.parse(pathname).ext
            console.log('ext is',ext)
            res.setHeader('Content-type', mimeType[ext] || 'text/plain')
            res.end(data)
        }
    })
}).listen(3012)
