const router = require('express').Router();
let Title = require('../models/title.model');

router.route('/').get((req, res) => {
  Title.find()
    .then(titles => res.json(titles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Title.findById(id, function(err, title) {
      res.json(title);
  });
});

module.exports = router;