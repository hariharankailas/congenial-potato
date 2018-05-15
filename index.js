/*var apiai = require('apiai');

var app = apiai("d92b6db3d22745a78f064f96fce19db4");

var request = app.textRequest('Hi', {
    sessionId: '<unique session id>'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();*/
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const port = 3000;

var app = express();
var apiai = require('apiai');
var apiapp = apiai("d92b6db3d22745a78f064f96fce19db4");

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.send('Hello Salesforce');
});

app.post('/chat', function(req, res){

  var request = apiapp.textRequest(req.body.chatText, {
    sessionId: '4BGUAgBUD_1NO0WOl8UjukTbKa4C5FdnYYO25tlVNknms6medUzZrGHXsC3FH72'
  });
  request.on('response', function(response) {
      console.log(response);
      res.send(response);
  });
  request.on('error', function(error) {
      console.log(error);

      res.send(error);
  });
  request.end();
});

app.listen(port, function(){
  console.log('server started on Port 3000...')
});
