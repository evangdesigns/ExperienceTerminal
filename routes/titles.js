const router = require('express').Router();
const Title = require('../models/Title');

router.get("/", async (req, res) => {
  try {
    const titles = await Title.find().sort({title_id: 1});
    res.json(titles);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res ) => {
  try {
    const title = await Title.findOne({title_id: req.params.id})
    res.json(title);
  } catch (err) {
    res.json({ message: err });
  }
});

//Query by Title for title_id DOESNT WORK
router.get("/title/:title", async (req, res) => {
  try {
    const title = await Title.findOne({ title_name: req.params.title });
    res.json(title.title_id);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;