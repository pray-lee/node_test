const fs = require('fs')
// 把当前目录下的文件和文件夹都打印出来
fs.readdir(`${__dirname}/mkdir_test`, (err, data) => {
  if(err){
    return 
  }
  console.log(data)
})