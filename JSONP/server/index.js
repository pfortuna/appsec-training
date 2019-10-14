var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/weather-raw.json', function(req, res, next) {
  console.log("Request for weather-raw.json");
  res.set('Content-Type', 'application/json');
  res.sendFile(__dirname + '/public/weather.json');
});

app.get('/weather.json', function(req, res, next) {
  console.log("Request for weather.json");
  res.set('Content-Type', 'application/javascript');
  res.jsonp({ "temperature": randomInt(13,25), "humidity": randomInt(40,90)});
});

app.get('/', function(req, res) {
  res.send("frame1 - http://bar.com:3000/");
});

app.listen(3000, function() {
  console.log('Server is running at PORT 3000');
});

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}