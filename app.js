var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var bootstrap = require('bootstrap');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var http = require('http');


var config = require('./config');
var index = require('./routes/index');
var users = require('./routes/users');
var themas = require('./routes/themas');
var reg = require('./routes/reg');
var crud = require('./routes/crud');
var socket = require('./routes/socket');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use(express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.use(express.static(path.join(__dirname, '/node_modules/ckeditor/')));
app.use(express.static(path.join(__dirname, '/node_modules/socket.io-client/dist')));


app.use(session({
		secret: 'test',
		store: new MongoStore({
			url: 'mongodb://localhost/site'}),
        saveUninitialized: true,
		resave: true
		}));

app.use('/themas', themas);
app.use('/reg', reg);
app.use('/crud', crud);
app.use('/chat', socket);
app.use('/', index); // всегда последний, дефолтный 

		
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

var server = http.createServer(app);
server.listen(config.get('port'),function(){
	console.log('Server listenning port ' + config.get('port'));
});

require('./socket')(server);

module.exports = app;
