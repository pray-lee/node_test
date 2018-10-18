const fs = require('fs')

const events = require('events')

const EventEmitter = new events.EventEmitter()

function getData () {
  fs.readFile(`${__dirname}/text.txt`, (err, data) => {
    //派发
    EventEmitter.emit('gotDataEnd', data.toString())
  })
}

//监听
EventEmitter.on('gotDataEnd', (data) => {
  console.log(`这就是获取到的数据: ${data}`)
})

getData()