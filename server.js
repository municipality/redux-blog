var express = require('express')
var path = require('path')
// var request = require('request');
// var fs = require('fs');

/**
 * Initialize mongodb connection
 */
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://user:password@ds149934.mlab.com:49934/blog'

var app = express()

app.use('/static', express.static(__dirname + '/build/static'))

// Make our db accessible to our router
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

var router = express.Router()

router.get('/retrieveentries', function(req, res) {
  // Connect to db to read
  MongoClient.connect(url, function(err, db) {
    console.log('Connected successfully to server')
    //Get all entries under collection 'entries'
    var collection = db.collection('entries')
    collection.find({}).toArray(function(err, entries) {
      console.log('Retrieved entries!')
      console.log(entries)
      res.json(entries)
      db.close()
    })

  })
})

app.use('/api', router)

//For routing, if no matching path, send it to angular2 to handle
app.all('*', function(req, res) {
  console.log('[TRACE] Server 404 request:' + req.originalUrl)
  res.status(200).sendFile(path.join(__dirname, 'build/index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

module.exports = app
