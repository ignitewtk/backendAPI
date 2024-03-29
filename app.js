var createError = require('http-errors');
var express = require('express');
const cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// inject required router from ./routes, APIs are developed in ./routes
// TODO: add more API here
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product/product')
var accountRouter = require('./routes/accounts/account')
var customerRouter = require('./routes/customer/customer')

const getEmails = require('./public/javascripts/gmailService');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// allow CORS
// Method 1
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
// })
// Method 2
app.use(cors())

app.use('/public', express.static(path.join(__dirname, 'public')));

// Use API routes
// TODO: add more API here
app.use('/', indexRouter);
app.use('/files/add', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter)
app.use('/account', accountRouter)
app.use('/customer', customerRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Run Gmail service every 5 minutes
// setInterval(getEmails, 300000）

module.exports = app;
