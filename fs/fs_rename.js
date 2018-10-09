const fs = require('fs')
// 主要用于文件改名和剪切文件
fs.rename(`${__dirname}/test.txt`, `${__dirname}/newtest.txt`, (err) => {
  if(err){
    return
  }
  console.log('rename success...')
})