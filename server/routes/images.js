const router = require('express').Router();
const Image = require('../models/Image');

//Get all of the Images
router.get("/", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get Images by ProjectId
router.get("/project/:id", async (req, res) => {
  try {
    const images = await Image.find({project_id:req.params.id});
    res.json(images);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;