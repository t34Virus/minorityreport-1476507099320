var express = require('express');
var router = express.Router();
var https = require('https');
var fs = require('fs');
var ytdl = require('ytdl-core');

/* GET home page. */
router.get('/', function(req, res, next) {

  	var params = '&part=snippet&q=trump';
	
	var apikey = 'AIzaSyCR_YpfrlnM5HimvJk0iBfcmY0gv2rx764'
	var youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=' + apikey + params;
	
	https.get(youtubeUrl, function(response) {
	
        // Continuously update stream with data
        var body = '';
        
        response.on('data', function(d) {
            body += d;
        });
        
        response.on('end', function() {

            console.log(body);
            
        });
        
    });
	
	
	var url = 'https://www.youtube.com/watch?v=E1ysFmRPaTg';
	
	//ytdl.getInfo(url, null, function (err, info) {console.log(info)});
	
	ytdl(url, { filter: function(format) { 		  //console.log("\n\nFORMAT------>: " + JSON.stringify(format, null, 4) + "\n\n");
												  return format.resolution == undefined; } })
  	.pipe(fs.createWriteStream('sound.ogg'));
});

module.exports = router;