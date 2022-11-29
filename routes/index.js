var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mafekefeke' });
});

router.get('/play', function(req, res, next){
	 res.render('playvideo');
});
 
module.exports = router;
