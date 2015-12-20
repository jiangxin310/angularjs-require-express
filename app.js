var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//采用connect-mongodb中间件作为Session存储
var session = require('express-session');
var MongoStore = require('connect-mongodb')(session);
var db = require('../database/msession');



var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



//session配置
app.use(session({
    cookie: { maxAge: 600000 },
    secret: Settings.COOKIE_SECRET,
    store: new MongoStore({
        username: Settings.USERNAME,
        password: Settings.PASSWORD,
        url: Settings.URL,
        db: db})
}))
app.use(function(req, res, next){
    res.locals.user = req.session.user;
    next();
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/vendor',express.static(path.join(__dirname, 'public/vendor')));
app.use('/app',express.static(path.join(__dirname, 'public/dist/app')));
app.use('/assets/img',express.static(path.join(__dirname, 'public/dist/assets/img')));
app.use('/public/dist',express.static(path.join(__dirname, 'public/dist')));


app.use(session({
    secret: 'sundongzhiSecretword',
    store: new MongoStore(options)
}));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
