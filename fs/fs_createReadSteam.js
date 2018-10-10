const fs = require('fs')

let readStream = fs.createReadStream(`${__dirname}/file.txt`, 'utf-8')

let str = ''

readStream.on('data', (chunk) => {
  str += chunk
})

readStream.on('end', () => {
  console.log(str)
})

readStream.on('error', (err) => {
  console.log(err);
})