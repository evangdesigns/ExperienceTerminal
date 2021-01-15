const router = require('express').Router();
const ProjectSection = require('../models/ProjectSection');

//Get all of the ProjectSections
router.get("/", async (req, res) => {
  try {
    const projectSections = await ProjectSection.find();
    res.json(projectSections);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get ProjectSections by TitleId
router.get("/title/:id", async (req, res) => {
  try {
    const projectSections = await ProjectSection.find({title_id:req.params.id});
    res.json(projectSections);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;