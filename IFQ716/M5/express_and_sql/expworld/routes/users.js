var express = require('express');
var router = express.Router();
router.use('/course',require('./users/course'));


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
