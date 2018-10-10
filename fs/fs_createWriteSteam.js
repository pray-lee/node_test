const fs = require('fs')

let writeStream = fs.createWriteStream(__dirname + '/writeStream.txt')
let data = 'writeSteam'
writeStream.write(data, 'utf-8')
//标记写入完成
writeStream.end()
writeStream.on('finish', () => {
  console.log('write finished....')
})