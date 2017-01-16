var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');


///// Configure Mongo database /////
mongoose.connect('mongodb://localhost:27017/loris_site', function (err) {
    if (err) {
        console.log('Cannot connect to Mongo database at this time ' + err);
    } else {
        console.log('Connected to Mongo database!');
    }
});

///// Listening for server connection on port 3000 /////
app.listen(port, function () {
    console.log('Connected to Node server on port: ' + port + '!');
});