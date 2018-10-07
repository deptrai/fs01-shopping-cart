var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/testing', function(req, res, next) {
  res.send('Testing');
});

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('Logged in');
});
module.exports = router;
