const express = require('express');
const app = express();
const modelsIndex = require('./models');
const bodyParser = require('body-parser');
const banterRouter = require('./config/routes');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

app.use(bodyParser.json())

app.use(banterRouter);

app.get('/', function (req, res) {
  res.send('Hello world')
})

let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Listening on port ${ port }`);
});
