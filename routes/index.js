var express = require('express');
var router = express.Router();

var {BenefitCalculator} = require('./BenefitCalculator');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Vote Value'});
});


router.post('/', function(req, res, next) {

  var attrs = req.body;

  benefits = new BenefitCalculator(attrs).getBenefits();
  
  res.send({ title: 'Vote Value', benefits: benefits });
});

module.exports = router;
