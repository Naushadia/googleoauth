var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
var cors = require('cors');
var passport = require('passport');

dotenv.config("./.env");

var db = require("./models");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

require('./utils/google');
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/', usersRouter);

// app.use(passport.session());

// passport.serializeUser(function(user,cb) {
//   cb(null, user);
// });
// passport.deserializeUser(function(obj,cb) {
//   cb(null, obj);
// });

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT);

module.exports = app;
