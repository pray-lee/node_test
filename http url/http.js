const http = require('http')
const port = process.env.PORT || 3000
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
  res.write('hello nodeJs')
  res.end()
}).listen(8080)
//test