var express = require('express');
var router = express.Router();
var session = require('express-session');
var Users = require('../models/users').Users;
var mongoose = require('../config/mongoose');



router.get('/',function(req, res, next) {
	res.render('reg');
});
router.post('/',function(req, res, next) {
	//console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;
	var app = express();
	app.use(session({user: 'test'}));
	
	var users = new Users ({
		username: username,
		password: password
	});
	
	users.save(function(err, user){
		//console.log(arguments);

		return res.redirect('/');
	});
});


module.exports = router;