var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/nuovoaccount', function(req, res, next) {
  var uname = req.body.uname;
  var email = req.body.email;
  var psw = req.body.psw;
  var rpsw = req.body.rpsw;
  console.log(req.body);
  if(psw=='' || psw!=rpsw)
    res.send("<h1> ERROERE NELLE PASSWORD</h1>")
  else
    res.render('nuovoaccount', { title: 'Benvenuto', uname: uname, email: email});
});

module.exports = router;
