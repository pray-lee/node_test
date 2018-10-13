const http = require('http')

const fs = require('fs')

const ejs = require('ejs')

const path = require('path')

const url = require('url')

http.createServer( (req, res) => {
  if(req.url !== '/favicon.ico'){
    let pathname = url.parse(req.url).pathname
    if(pathname === '/'){
      res.writeHead('200', {'Content-Type': 'text/html;charset="utf-8"'})
      ejs.renderFile(`${__dirname}/form_get.ejs`, {}, (err, data) => {
        if(err){
          console.log(err)
        }else{
          res.end(data)
        }
      })
    }
    if(pathname === '/update'){
      res.writeHead('200', {'Content-Type': 'text/html;charset="utf-8"'})
      ejs.renderFile(`${__dirname}/form_post.ejs`, {}, (err, data) => {
        if(err){
          console.log(err)
        }else{
          res.end(data)
        }
      })
    }

    //request
    if(pathname === '/formDataGet'){
      let getData = url.parse(req.url, true)
      console.log(getData.query)
      res.end('login success')
    }
    if(pathname === '/formDataPost'){
      let string = ''
      req.on('data', data => {
        console.log(data)
        string += data
      })
      req.on('end', () => {
        res.end(string + '---------update successed')
      })
    }
  }
}).listen(8080)