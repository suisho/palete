var colourLovers = require("../lib/api/colourlovers")
var assert = require("assert")
var assert_string_array = require("./assert_string_array")
describe('colourLovers api', function(){
  it('get string array', function(done){
    colourLovers.colorName("123ccc",function(e, r){
      assert_string_array(r)
      done()
    })
  })
})