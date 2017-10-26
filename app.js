/*
Data = [{id:"", Description:"Survey questions",
options:[{itemid:"item1" value:"value1" selected:false},
{itemid:"item2" value:"value2" selected:false}]
}]
*/

// Datat Model for final route
/*
Data = [{id:"", Description:"Survey questions",
options:[{itemid:"item1" value:"value1" count:0},
{itemid:"item2" value:"value2" count:0}]
}] */
var http = require('http')
var fs = require('fs')
var path = require('path')

http.createServer(function (request, response) {
  console.log('request starting...')

  var filePath = '.' + request.url
  var extname = path.extname(filePath)
  var contentType = 'application/json'
  fs.readFile(filePath, function (error, content) {
    response.writeHead(200, { 'Content-Type': contentType })
    response.end(content, 'utf-8')
  })
}).listen(3006)
console.log('server running on 3006')
