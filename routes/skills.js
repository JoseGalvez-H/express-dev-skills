var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
// GET /skills/new <-- define before show route
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// Add delete route
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
