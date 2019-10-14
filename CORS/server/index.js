var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var allowedOrigins = ['http://foo.com',
                      'http://not-example.org'];

app.options('/delete/:id', function(req, res, next) {
  console.log("options request!");
  next();
});

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    console.log("Checking origin: "+origin);
    if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
        return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/auth', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var response = `${username} authenticated with password ${password}`;
  console.log(response);
  res.send(response);
});

app.delete('/delete/:id', function(req, res, next) {
  console.log('delete attempt of ' + req.params.id);
  res.send(req.params.id + ' deleted!');
});

app.get('/', function(req, res) {
  res.send("http://bar.com:3000/");
});

app.listen(3000, function() {
  console.log('Server is running at PORT 3000');
});
