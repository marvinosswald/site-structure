/*jshint -W030 */
var should = require ('should');
var sitestructure = require('../');
var structure = new sitestructure();

describe('Site Structure', function(){
  describe('rootClass', function(){
    it('is available', function(){
      structure.should.be.a.Object;
    });
  });
  /*describe('run',function(){
    it('with Sitemap',function(done){
      structure.run('http://omegasoft.de',function(array){
        should(array).be.a.Array;
        done();
      });
    });
  });*/
});
