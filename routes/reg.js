var express = require('express');
var router = express.Router();
var Users = require('../models/users').Users;

//var Mongoose = require('../config/mongoose');
//var session = require('express-session');
//var MongoStore = require('connect-mongo')(session);



router.get('/',function(req, res, next) {
	
	res.render('reg');
	
});
router.post('/', function(req,res,next){
	var app = express();
	var sess = req.session;
	sess.username = req.body.username;
	var username = req.body.username;
	var password = req.body.password;
	console.log(sess.username);
	var users = new Users ({
		username: username,
		password: password
	});

	users.save(function(err, user){
		return res.redirect('/crud');
	});
});
	
	
	/*
router.post('/',function(req, res, next) {


	var username = req.body.username;
	var password = req.body.password;
	
	

	

	var users = new Users ({
		username: username,
		password: password
	});

	users.save(function(err, user){
		return res.redirect('/crud');
	});
});*/




module.exports = router;