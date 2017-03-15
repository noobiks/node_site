var express = require('express');
var router = express.Router();
var Themas = require('../models/themas').Themas;



/* GET home page. */
router.get('/:id/:url?', function(req, res, next) {
	var name = req.param('id');
	var url = req.param('url');
	var themas = new Themas({
		name: name,
		body: 'Text about with courses node js',
		url: url
	});
	themas.save(function(err, user, affected){
		console.log('ok');
	});
	res.redirect('/');
});

module.exports = router;
