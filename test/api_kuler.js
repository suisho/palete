var kuler = require("../lib/api/kuler")
var assert = require("assert")
describe('colourLovers api', function(){
  it('get string array', function(done){
    kuler.theme("3639321",function(e, r){
      console.log(r)
      done()
    })
  })
})