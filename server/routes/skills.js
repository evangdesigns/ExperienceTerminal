const router = require('express').Router();
let Skill = require('../models/skill.model');

router.route('/').get((req, res) => {
  Skill.find()
    .then(skills => res.json(skills))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;