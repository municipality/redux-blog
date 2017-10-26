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

  //FAKE DATA TO ONLY BE USED IN DEV
  if (process.env.NODE_ENV !== 'production') {
    res.json([
      {
        title: 'Test title 1',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer eget aliquet. Consequat nisl vel pretium lectus quam. Tempus urna et pharetra pharetra. Nunc non blandit massa enim nec dui nunc. Commodo odio aenean sed adipiscing. Ipsum dolor sit amet consectetur. Placerat duis ultricies lacus sed turpis tincidunt id. Euismod lacinia at quis risus sed vulputate odio ut enim. Tincidunt arcu non sodales neque sodales ut. Feugiat vivamus at augue eget arcu dictum. Ornare aenean euismod elementum nisi quis eleifend. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Consequat nisl vel pretium lectus quam. Rhoncus aenean vel elit scelerisque mauris.

Nisi porta lorem mollis aliquam ut. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ultricies mi eget mauris pharetra et ultrices. Mattis rhoncus urna neque viverra justo nec ultrices dui. Aliquet lectus proin nibh nisl condimentum id venenatis. Accumsan tortor posuere ac ut consequat semper viverra nam. Velit euismod in pellentesque massa placerat duis ultricies. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Eget mi proin sed libero enim. Eget magna fermentum iaculis eu non diam phasellus. Enim lobortis scelerisque fermentum dui. Purus semper eget duis at. Consequat ac felis donec et odio.

`,
        isOpen: true,
        tags: ['tag1', 'tag2'],
        date: Date.now(),
        img: 'banner.jpg'
      },
      {
        title: 'Test title 2',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer eget aliquet. Consequat nisl vel pretium lectus quam. Tempus urna et pharetra pharetra. Nunc non blandit massa enim nec dui nunc. Commodo odio aenean sed adipiscing. Ipsum dolor sit amet consectetur. Placerat duis ultricies lacus sed turpis tincidunt id. Euismod lacinia at quis risus sed vulputate odio ut enim. Tincidunt arcu non sodales neque sodales ut. Feugiat vivamus at augue eget arcu dictum. Ornare aenean euismod elementum nisi quis eleifend. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Consequat nisl vel pretium lectus quam. Rhoncus aenean vel elit scelerisque mauris.

Nisi porta lorem mollis aliquam ut. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ultricies mi eget mauris pharetra et ultrices. Mattis rhoncus urna neque viverra justo nec ultrices dui. Aliquet lectus proin nibh nisl condimentum id venenatis. Accumsan tortor posuere ac ut consequat semper viverra nam. Velit euismod in pellentesque massa placerat duis ultricies. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Eget mi proin sed libero enim. Eget magna fermentum iaculis eu non diam phasellus. Enim lobortis scelerisque fermentum dui. Purus semper eget duis at. Consequat ac felis donec et odio.

`,
        isOpen: true,
        tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        date: Date.now()
      }
    ])
    return
  }

  // USE THIS IN PRODUCTION
  MongoClient.connect(url, function(err, db) {
    if (err) throw err
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
