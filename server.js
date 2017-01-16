let express  = require('express');
let app      = express();
let router   = express.Router();
let port     = 3000;
let morgan   = require('morgan');
let mongoose = require('mongoose');

app.listen(port, function () {
    console.log('Server started and listening on port: ' + port);    //This code block is saying express() which was  set to the variable
});                                                                  // "app" listen on port which was set to "3000" and let me know in the
                                                                     // console log if you can connect to a server on that port.

///// Set static route for public folder  /////
app.use(express.static('public'));

///// Setup Morgan middleware /////                                 //Morgan is middleware for even logging.
app.use('morgan', ('dev'));

///// Setup MongoDB /////                                           //Mongo database connection name of database can be changed at any time.
mongoose.connect('mongodb://localhost/loris');

///// Test Route (uncomment to and use localhost:3000) /////        //This is a test route that can be used if problems aries
// app.get('/', function (req, res) {                               //and we need to ensure that we are still able to connect to the
//     res.send("Hello World");                                     //http server. In the Url type http://localhost:3000 and you should
// });                                                              //get "hello world" in the browser window.