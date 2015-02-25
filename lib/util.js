var request = require('request');

/**
 * Look up if there is a Sitemap.xml in the root folder
 *
 * @param {String} url
 * @param {Function} cb
 * @api private
 */

 exports.checkSitemap = function(url,cb){
   try{
     request(url + '/sitemap.xml', function (error, response,body) {
       if (!error && response.statusCode == 200) {
         cb(body);
       }else if (error){
         cb(false);
       }else{
         cb(false);
       }
     })
   }catch(e){
     cb(false);
   }

 };

/**
 * Parse Sitemap.xml into an array
 *
 * @param {String} url
 * @param {Function} cb
 * @api private
 */

exports.parseSitemap = function(xml,cb){
  var arr = [];
  cb(arr);
};
