const http = require('http')
const url = require('url')
const ejs = require('ejs')
const port = process.env.PORT || 3000

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  if(req.url !== '/favicon.ico'){
    if(pathname === '/login'){
      //render login
      ejs.renderFile(`${__dirname}/views/login.ejs`, {data: 'login'}, (err, data) => {
        res.end(data)
      })
    }
    if(pathname === '/register'){
      // render register
      ejs.renderFile(`${__dirname}/views/register.ejs`, {data: 'register'}, (err, data) => {
        res.end(data)
      })
    }
  }else{
    res.end()
  }

}).listen(port, () => {
  console.log(`server is running at port ${port}`)
})