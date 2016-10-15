var express = require('express');
var router = express.Router();
var https = require('https');
var fs = require('fs');
var ytdl = require('ytdl-core');
var ffmpeg = require('fluent-ffmpeg');

/* GET home page. */
router.post('/', function(req, res) {

  	/*var params = '&part=snippet&q=trump';
	
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
        
    });*/
	
	
	console.log(req.body.suggest);
	
	var url = 'https://www.youtube.com/watch?v=E1ysFmRPaTg';
	
	//ytdl.getInfo(url, null, function (err, info) {console.log(info)});
	
	var videopath = 'sound.mp4';
	var soundpath = 'sound.ogg';
	
	var stream = ytdl(url, { filter: function(format) { 		  //console.log("\n\nFORMAT------>: " + JSON.stringify(format, null, 4) + "\n\n");
												  return format.container == 'mp4'; } });
  	//.pipe(fs.createWriteStream(videopath));
  	
  	var proc = new ffmpeg({source: stream});
  	
  	proc.withAudioCodec('libvorbis').noVideo().toFormat('ogg').saveToFile(soundpath, function(stdout, stderr) {
                				console.log('file has been converted succesfully');
                				//res.send({status: soundpath});
            			});
            			
    res.send({status: soundpath});
    console.log('Finished!');
            
});

module.exports = router;