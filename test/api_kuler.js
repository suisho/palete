var kuler = require("../lib/api/kuler")
var assert = require("assert")
describe('kuler api', function(){
  it('get string array', function(done){
    kuler.themes("3639321",function(e, r){
      console.log(r)
      done()
    })
  })
})