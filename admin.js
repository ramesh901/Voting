function httpGet (url, callback) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      callback(xmlHttp.responseText)
    }
  }
  xmlHttp.open('GET', url, true)
  xmlHttp.send(null)
}

function loadSurvey () {
  httpGet('./data.json', function (s) {
    var tasks = JSON.parse(s)
    console.log(tasks)
    //console.log('task length', tasks.length)
    //console.log(tasks[1]['title'])
    let tasksHTML = ''
    for (let i = 0; i < tasks.length; ++i) {
      tasksHTML += '<a href=' + tasks[i]['id'] + '>' + tasks[i]['title'] + '</a> <br>'
    }
    document.getElementById('adminSummary').innerHTML = tasksHTML
    //console.log('I am inside')
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
    }) */
  })
}

function loadUniqueSurvey () {
    // httpGet('./data.json', function (s) {}
}
window.onload = loadSurvey
