var express = require('express'), 
	http = require('http');

var app = express(); 
var server = http.createServer(app);
 
app.get('/', function(req, res){
  res.send('<h1>another hello world</h1>');
});
 
app.listen(3000);