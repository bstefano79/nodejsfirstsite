var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/registrati', function(req, res, next) {
  res.render('registrati', { title: 'Registrazione' });
});
module.exports = router;
