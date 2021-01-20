const router = require('express').Router();
const Project = require('../models/Project');

//Get all of the Projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().populate('ProjectSection').sort({project_id: 1});
    res.json(projects);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get Ā Project by Id
router.get("/project/:id", async (req, res) => {
  try {
    const projects = await Project.findOne({project_id:req.params.id}).populate('ProjectSection');
    res.json(projects);
  } catch (err) {
    res.json({ message: err });
  }
});


//Get projects by SectionId
router.get("/section/:id", async (req, res) => {
  try {
    const projects = await Project.find({project_section_id:req.params.id}).populate('ProjectSection');
    res.json(projects);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;