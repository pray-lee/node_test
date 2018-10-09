const fs = require('fs')

fs.readFile(`${__dirname}/appendfile.txt`, (err, data) => {
  if(err)
    console.log(err)
  else
    console.log(data.toString())
})