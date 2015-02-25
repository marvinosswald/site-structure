/*jshint -W030 */
var objectAssign = require('object-assign');

function siteStructure(){

}
objectAssign(siteStructure.prototype,require('./lib/util'));
module.exports = siteStructure;

siteStructure.prototype.run = function(url,cb){
  var _this = this;
  this.checkSitemap(url,function(exists){
    if(exists){
      _this.parseSitemap(url);
    }
  });
  cb(arr);
};
