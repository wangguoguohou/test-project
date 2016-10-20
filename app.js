var express = require('express');
var app = express();

// app.all('/', function (req, res, next) {
  // console.log('Accessing the secret section ...');
  // next(); // pass control to the next handler
// });

// app.get('/', function (req, res) {
  // res.send('Hello from B!');
// });

app.all('/', function (req, res, next) {
	console.log('response will be sent by the next function ...');
	next();
},function (req, res) {
	res.send('Hello from B!');
});

app.get('/index', function (req, res,next) {
	next();
}, function (req, res) {
	res.send('Hello from Accessing!');
});





var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});