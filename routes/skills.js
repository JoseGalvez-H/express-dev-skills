var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills') //need to create contr folder and file

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', skillsCtrl.index);

module.exports = router;
