const fs = require('fs')
// 如果没有文件，则新建写入，如果有，则覆盖写入
fs.writeFile(`${__dirname}/test.txt`, 'hello nodejs', (err) => {
  if(err){
    console.log(err)
  }else{
    console.log('write success...')
  }
})

// 追加内容
// 如果没有文件，则新建写入，如果有，则追加内容
fs.appendFile(`${__dirname}/appendfile.txt`, 'append..', (err) => {
  if(err)
    return false
  console.log('append success...')
})