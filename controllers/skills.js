
module.exports = {
    index
}

const skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
        skills: skills.getAll()
    });
}
