const fs = require('fs')

function getData() {
  fs.readFile(`${__dirname}/text.txt`, (err, data) => {
    if(err){
      console.log(err)
      return 
    }
    return data.toString()
  })
}
let data = getData()
console.log(data) //undefined...因为readFile是异步操作

// 解决方案，使用回调函数
function getData1 (callback) {
  fs.readFile(`${__dirname}/text.txt`, (err, data) => {
    if(err)
      return
    else
      return callback(data.toString())
  })
}
let data1 = getData1(function (data) {
  console.log(data)
})