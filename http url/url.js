const http = require('http')
const url = require('url')
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
  if(req.url !== '/favicon.ico'){
    let result = url.parse(req.url, true)
    console.log(result)
    console.log(result.query.pid, result.query.aid)
  }
  res.write('解析URL')
  res.end()
}).listen(8001)

