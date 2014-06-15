var request = require('request')
var url = require("url")
var api = require("../api/colourlovers")
module.exports = function(uri, cb){
  var path = url.parse(uri).pathname
  var id = path.split('/')[2]
  api.paletteColors(id, function(e, colors){
    cb(e, colors)
  })
}