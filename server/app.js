const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const indexApp = require('./routes/index');

const app = express();

mongoose.connect('mongodb+srv://kapepa:Uva56945829@cluster0.vlmfu.mongodb.net/dentist');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());

app.use(logger('dev'));
app.use(express.json({limit: '1050mb'}));
app.use(express.urlencoded({ extended: true, limit: '1050mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public/images')));

app.use('/app', indexApp);

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

module.exports = app;
