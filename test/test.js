var should = require ('should');
var sitestructure = require('../');
var structure = new sitestructure();

describe('Site Structure', function(){
  describe('rootClass', function(){
    it('is available', function(){
      structure.should.be.a.Object;
    })
  })
})
