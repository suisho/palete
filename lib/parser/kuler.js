var request = require('request')
var url = require("url")
var api = require("../api/kuler")
module.exports = function(uri, cb){
  var path = url.parse(uri).pathname
  var id = path.split('-').pop().replace('/','')
  api.themes(id, function(e, colors){
    cb(e, colors)
  })
}