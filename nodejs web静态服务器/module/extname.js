const mimeJson = require('../mime.json')
exports.contentType = (extname) => {
  return mimeJson[extname]
}