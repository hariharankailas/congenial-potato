/*var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;*/

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
console.log("start");
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const port = 3000;

var app = express();
var apiai = require('apiai');
var apiapp = apiai("d92b6db3d22745a78f064f96fce19db4");
console.log("variables initialiezed");
//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.send('Hello Salesforce');
});
console.log("app.get");
//
// app.post('/chat', function(req, res){
//   console.log("app-post",req);
//
//   var request = apiapp.textRequest(req.body.chatText, {
//     sessionId: '0tjSXk.kNTYyZhPSYUfq0q0ir482YpbtjSvkO_mqaT8aRPr1cKg5gpQfPKVgmC'
//   });
//   console.log("request",request);
//   request.on('response', function(response) {
//       console.log(response);
//       res.send(response);
//   });
//   request.on('error', function(error) {
//       console.log(error);
//
//       res.send(error);
//   });
//   request.end();
// });

app.listen(port, function(){
  console.log('server started on Port 3000...')
});

module.exports = app;
