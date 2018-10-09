const fs = require('fs')
// stat 检测文件类型 (异步操作)
fs.stat(`${__dirname}/directory`, (err, stats) => {
  if(err){
    console.log(err);
    return 
  }
  console.log(stats.isFile())
  console.log(stats.isDirectory())
})

fs.stat(`${__dirname}/file.txt`, (err, stats) => {
  if(err){
    return
  }
  console.log(stats.isFile())
  console.log(stats.isDirectory())
})