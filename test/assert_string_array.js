var util = require("util")
var assert = require("assert")
module.exports = function(r){
  assert(util.isArray(r))
  r.forEach(function(item){
    assert(typeof item == "string" )
  })
}