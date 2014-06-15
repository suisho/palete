var colourLoversParser = require("../lib/parser/colourlovers")
var kulerParser = require("../lib/parser/kuler")
var assert_string_array = require("./assert_string_array")

describe('colourLovers',function(){
  it('parse', function(done){
    colourLoversParser("http://www.colourlovers.com/palette/3278635/Living...", function(e, r){
      assert_string_array(r)
      done()
    })
  })
})

describe('kuler',function(){
  it('parse', function(done){
    kulerParser("https://kuler.adobe.com/Theme-2-color-theme-3639321/", function(e, r){
      assert_string_array(r)
      done()
    })
  })
})

