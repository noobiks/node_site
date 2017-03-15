var express = require('express');
var router = express.Router();
var Themas = require('../models/themas').Themas;


/* GET home page. */
router.get('/:id?', function(req, res, next) {
	console.log(req.param('id'));
  if(req.params.id){
    var indx = req.params.id;
	}else{
    var indx = 'index';
  }
  var Themas = require('../models/themas').Themas;
  Themas.findOne({'url': indx}, function(err, ttext){
	if(!ttext){
		ttext = {
			name: 'Welcome to site!',
			body: 'Sorry, page not found',
		};
	}  
	res.render('static', { text: ttext });
  });
//res.render('index', { title: 'Welcome to site! Index' });
});

module.exports = router;
