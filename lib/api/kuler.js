
var request = require('request')

module.exports = {
  base_url :"https://kuler.adobe.com/api/v2/",
  apikey : "7810788A1CFDC3A717C58F96BC4DD8B4",
  get : function(path, param, cb){
    var url = this.base_url + path + "/" + param + "?x-api-key=" + this.apikey
    request.get(url, function (e, r, body){
      if(e){
        cb(e)
      }
      cb(e, JSON.parse(body))
    })
  },
  theme : function(id, cb){
    this.get("themes",id , function(e, r){
      cb(e, r)
    })
  }
}

  