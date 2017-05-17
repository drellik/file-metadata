var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//var upload = multer({ dest: './uploads/' });
var upload = multer();

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', upload.single('myFile'), function (req, res){
  console.log(req.file);
  var result = {"size":req.file.size};
  res.send(JSON.stringify(result));
});

app.listen(8080);