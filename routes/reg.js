var express = require('express');
var router = express.Router();
var Users = require('../models/users').Users;
//var Mongoose = require('../config/mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);



router.get('/',function(req, res, next) {
	res.render('reg');
});
router.post('/',function(req, res, next) {
	//console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;
	var app = express();

	app.use(session({
		secret: 'test',
		store: new MongoStore({
			url: 'mongodb://localhost/site',
            create: 'create'}),
        saveUninitialized: true,
		resave: true
		}));

	console.log(req.session);

	var users = new Users ({
		username: username,
		password: password
	});

	users.save(function(err, user){
		return res.redirect('/');
	});
});


module.exports = router;