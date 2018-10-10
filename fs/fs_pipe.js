const fs = require('fs')

const readStream = fs.createReadStream(`${__dirname}/file.txt`)
const writeStream = fs.createWriteStream(`${__dirname}/filePipe.txt`)


//管道操作
readStream.pipe(writeStream)