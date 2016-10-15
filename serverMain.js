var WebApp = require("./app.js");
var http = require('http');
var fs = require('fs');

http.createServer(WebApp).listen(WebApp.get('port'), '0.0.0.0', function() {
	console.log('Express server listening on port ' + WebApp.get('port'));
});


