/*jshint -W030 */
var should = require ('should');
var util = require('../lib/util');

describe('Util', function(){
  describe('Functions',function(){
    it('checkSitemap',function(){
      util.checkSitemap.should.be.a.Function;
    });
    it('parseSitemap',function(){
      util.parseSitemap.should.be.a.Function;
    });
  });

  describe('checkSitemap',function(){
    it('works',function(done){
      util.checkSitemap('http://omegasoft.de',function(exists){
        exists.should.be.a.String;
        done();
      });
    });
    it('can fail',function(done){
      util.checkSitemap('http://marvinosswald.de',function(exists){
        exists.should.be.false;
      });
    });
  });

  describe('parseSitemap',function(){
    it('gives back array',function(done){
      util.parseSitemap('http://omegasoft.de',function(array){
        should(array).be.a.Array;
        done();
      });
    });
  });
});
