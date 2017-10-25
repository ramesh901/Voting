function httpGet(url, callback) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            callback(xmlHttp.responseText)
        }
    }
    xmlHttp.open('GET', url, true)
    xmlHttp.send(null)
}

function loadSurvey() {
    httpGet('./data.json', function (s) {
        tasks = JSON.parse(s)
        let tasksHTML = ''
    console.log("I am inside")
    /*
    console.log(content)
    content.map((item) => {
        console.log(item)
        var admin = document.querySelector('#adminSummary')
        var anchor = document.createElement('a')
        anchor.textContent = item["title"]
        anchor.href = '#'
        console.log("admin is", admin)
        console.log("anchor is", anchor)
        var br = document.createElement('br')
        admin.appendChild(anchor)
        admin.appendChild(br)
    })*/
})
}

window.onload = loadSurvey