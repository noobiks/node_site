var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id?', function(req, res, next) {
	console.log(req.param('id'));
  if(req.params.id){
    var indx = req.params.id;
	}else{
    var indx = 'Moving Your Business Forward';
  }
  res.render('index', { title: indx });
});

module.exports = router;
