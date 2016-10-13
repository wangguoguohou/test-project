var express = require('express');
var app = express();

// app.all('/', function (req, res, next) {
  // console.log('Accessing the secret section ...');
  // next(); // pass control to the next handler
// });

// app.get('/', function (req, res) {
  // res.send('Hello from B!');
// });

app.get('/', function (req, res, next) {
	console.log('response will be sent by the next function ...');
	next();
}, function (req, res) {
	res.send('Hello from B!');
});

app.get('/', function (req, res, next) {
	res.send('Hello from B!');//两个回调写两个send会报错
  next();
}, function (req, res) {
  res.send('Hello from B!');
});



var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});