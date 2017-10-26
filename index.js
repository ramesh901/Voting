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
const data = require('./data.json')


http.createServer(function (req, res) {
    
    let pathname = '.' + url.parse(req.url).pathname
    console.log('pathname is',pathname)
    console.log(typeof url.parse(req.url).pathname)
    const mimeType = {
        '.html': 'text/html',
        '.json': 'application/json',
        '.css': 'text/css'
    } 
    /* In pathname we have './2'. Now pick 2 alone and find the id in data.json file if its there then
    print that object */

    var dynamicID = url.parse(req.url).pathname.substring(1)
    var findObject = data.filter(function(item) {
        console.log("item id",item.id,item["id"],dynamicID)

        return (String(item.id) === dynamicID)

    }  )
    console.log("findObject is",findObject)
    console.log("data is",data)
    if(findObject.length !== 0){
        //res.write(findObject)
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
console.log("listening 3012")
