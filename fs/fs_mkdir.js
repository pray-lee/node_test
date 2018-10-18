const fs = require('fs')
fs.mkdir(`${__dirname}/mkdir_test`, (err) => {
  if(err){
    return 
  }
  console.log(`mkdir success...`)
})