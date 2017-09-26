var express = require('express');
var path = require('path');
// var request = require('request');
// var fs = require('fs');


//mongodb dependencies
// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('mongodb://admin:maples@ds147995.mlab.com:47995/homepage');

// var users = require('./routes/users');

var app = express();

app.use('/static', express.static(__dirname + '/build/static'));

var compress = require('compression');

app.use(compress());
// expose node_modules to client app
// app.use(express.static(__dirname + "/node_modules/", { maxage: '7d' } ));
// app.use(express.static(__dirname));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

var router = express.Router();
app.use('/api', router);



//For routing, if no matching path, send it to angular2 to handle
app.all('*', function(req, res) {
  console.log("[TRACE] Server 404 request:" + req.originalUrl);
  res.status(200).sendFile(path.join(__dirname, 'build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {

  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});



module.exports = app;
