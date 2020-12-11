// Require Dependencies
var express = require("express");
var fs = require("fs");
var path = require('path');

// Initialize express app
var app = express();
var PORT = process.env.PORT || 3000;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  