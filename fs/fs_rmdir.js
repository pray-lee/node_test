const fs = require('fs')

fs.rmdir(`${__dirname}/rmdir`, (err) => {
  if(err){
    return
  }
  console.log('rmdir success...')
})

fs.unlink(`${__dirname}/newtest.txt`, (err) => {
  if(err){
    return
  }
  console.log('delete file success...');
})