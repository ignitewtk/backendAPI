var express = require('express');
var fs = require('fs')

var router = express.Router();
var getEmails = require('../public/javascripts/gmailService')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/xxx', function(req, res, next) {
  res.render('index', { title: 'api' });
});

router.get('/xxx/page1', function(req, res, next) {
  res.render('index', { title: 'page1' });
});


router.get('/user/aaa', function(req, res, next) {
  res.send('respond with a resource aaa in index');
});

router.get('/user', function(req, res, next) {
  res.send('respond with a resource / in index');
});


module.exports = router;

router.post('/files/add', function(req, res, next) {
  console.log("Receive request in /addFile:")
  console.log("Request baseURL:", req.baseURL)
  console.log("Request header:", req.headers)
  console.log("Request file:", req.file)
  console.log("Request data:", req.data)
  console.log("Request proxy:", req.proxy)
  console.log("Request params:", req.params)
  console.log("Request resonse type:", req.responseType)
  console.log("Request resonse transformRequest:", req.transformRequest)
  console.log("Write request start")
  res.send("Receive request in /addFile:\nRequest body:")
})

router.get('/emails', function(req, res, next) {
  res.send(getEmails())
})