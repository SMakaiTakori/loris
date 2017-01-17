var express     = require('express');
var app         = express();
var port        = process.env.PORT || 3000;
var mongoose    = require('mongoose');
var morgan      = require('morgan');
var bodyParser = require('body-parser');
var User        = require('./app/models/user');


///// Set up Morgan middleware /////
app.use(morgan('dev'));

///// Set up body parser middleware /////
app.use(bodyParser.json());                                                     // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));                             // for parsing application/x-www-form-urlencoded

///// Configure Mongo database /////
mongoose.connect('mongodb://localhost:27017/loris_site', function (err) {
    if (err) {
        console.log('Cannot connect to Mongo database at this time ' + err);
    } else {
        console.log('Connected to Mongo database!');
    }
});

app.post('/newuser', function (req, res) {
   var user       = new User();
   user.firstName = req.body.firstName;
   user.lastName  = req.body.lastName;
   user.email     = req.body.email;
   user.username  = req.body.username;
   user.password  = req.body.password;
    if (req.body.firstName == null || req.body.firstName == '' ||
        req.body.lastName  == null || req.body.lastName  == '' ||
        req.body.email     == null || req.body.email     == '' ||
        req.body.username  == null || req.body.username  == '' ||
        req.body.password  == null || req.body.password  == '') {
        res.send('Ensure all fields marked with an asterisk were filled out')
    } else {
        user.save(function (err) {
            if (err) {
                res.send('Username or E-mail already exist!');
            } else {
                res.send('user created');
            }
        });
    }
});
///// Listening for server connection on port 3000 /////
app.listen(port, function () {
    console.log('Connected to Node server on port: ' + port + '!');
});