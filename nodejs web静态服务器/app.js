const http = require('http')

const fs = require('fs')

const path = require('path')

const url = require('url')

const extname = require('./module/extname')

const port = process.env.PORT || 8888

const app = http.createServer((req, res) => {
  //用url模块解析路径拿到路径名称
  let pathname = url.parse(req.url).pathname
  // 通过后缀名匹配contentType
  let contentType = extname.contentType(path.extname(pathname))
  //请求资源
  if(req.url == '/'){
    pathname = '/index.html'
  }
  if (req.url !== '/favicon.ico') {
    fs.readFile(`${__dirname}/static${pathname}`, (err, data) => {
      if (err) {
        fs.readFile(`${__dirname}/static/404.html`, (err, data) => {
          if (err) {
            return
          }else {
            res.writeHead('404', {'Content-Type': ''+contentType+';charset="utf-8"'})
            res.write(data)
            res.end()
          }
        })
      }else {
        res.writeHead('200', {'Content-Type': ''+contentType+';charset="utf-8"'})
        res.write(data)
        res.end()
      }
    })
  }
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})
