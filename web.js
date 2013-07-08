var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
fs.readFile('/', function (err, data) {
                if (err) throw err;
                console.log(data);
});

app.get('/index.html', function(request, response) {
  	response.send('Hello World3!');
	console.log('test');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
