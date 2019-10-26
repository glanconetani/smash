"use strict";

var path = require("path");

var express = require("express");

var db = require('./db');

var PORT = process.env.HTTP_PORT || 4001;
var app = express();
app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.get('/', function (req, res) {
  res.send('just gonna send it');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
