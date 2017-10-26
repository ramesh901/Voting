
var fileLocation = './data.json'
var fs = require('fs')

function start () {
  console.log("Request handler 'start' was called.")
}

function upload () {
  console.log("Request handler 'upload' was called.")
  var contentType = 'application/json'
  fs.readFile(fileLocation, createDomAdminSummary)
        // response.writeHead(200, { 'Content-Type': contentType });
        // console.log("content is",content)

    // content.forEach((item) => console.log(item[title]))
}

function createDomAdminSummary (err, content) {
  console.log('I am inside')
  console.log(content)
  content.map((item) => {
    console.log(item)
    var admin = document.querySelector('#adminSummary')
    var anchor = document.createElement('a')
    anchor.textContent = item['title']
    anchor.href = '#'
    console.log('admin is', admin)
    console.log('anchor is', anchor)
    var br = document.createElement('br')
    admin.appendChild(anchor)
    admin.appendChild(br)
  })
}
exports.start = start
exports.upload = upload
