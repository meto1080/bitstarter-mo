var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
	var fs = require('fs');
	fs.readFile('/etc/passwd', function (err, data) {
  		if (err) throw err;
		response.send(data);
  		console.log(data);
  	});
  	response.send('Hello World2!');
	console.log('test');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
