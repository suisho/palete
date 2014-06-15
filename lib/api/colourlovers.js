var request = require('request')

module.exports = {
  base_url : "http://www.colourlovers.com/api/",
  get : function(path, param, cb){
    var url = this.base_url + path + "/" + param + "?format=json"
    request.get(url, function (e, r, body){
      if(e){
        cb(e)
      }
      cb(e, JSON.parse(body))
    })
  },
  colorName : function(hex, cb){
    this.get("color", hex, function(e, r){
      names = []
      r.forEach(function(clr){
        names.push(clr.title)
      })
      cb(e, names)
    })
  },
  paletteColors : function(id, cb){
    this.get("palette", id, function(e, r){
      cb(e, r[0].colors)
    })
  }
}