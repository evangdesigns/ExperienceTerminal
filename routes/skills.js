const router = require('express').Router();
const Skill = require('../models/Skill');
const TitleSkills = require('../models/TitleSkills');
const ProjectSkills = require('../models/ProjectSkills');

//Get all of the skills
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find().populate('SkillCategory');
    res.json(skills);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get A Skill by Skill Id
router.get("/skill/:id", async (req, res) => {
  try {
    const skill = await Skill.findOne({skill_id: req.params.id}).populate('SkillCategory')
    res.json(skill);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get a skill by skill id
const getSkillsByskillId = async (id) => {
  const result = await Skill.findOne({skill_id: id}).populate('SkillCategory')
  return result;
}


//Get all TitleSkills by TitleId and map each TitleSkill through Skills Table
router.get("/title/:id", async (req, res) => {
  try {
    const titleSkills = await TitleSkills.find({title_id: req.params.id})
    let promises = titleSkills.map(ts => getSkillsByskillId(ts.skill_id));
    let skills = await Promise.all(promises);
    res.json(skills)
  } catch (err) {
    res.json({ message: err });
  }
});

//Get a skill by skill id
const getSkillsByProjectSectionId = async (id) => {
  const result = await Skill.findOne({skill_id: id}).populate('SkillCategory')
  return result;
}


//Get all ProjectSkills by ProjectSectionId and map each ProjectSkill through Skills Table
router.get("/project/:id", async (req, res) => {
  try {
    const projectSkills = await ProjectSkills.find({project_section_id: req.params.id})
    let promises = projectSkills.map(ps => getSkillsByProjectSectionId(ps.skill_id));
    let skills = await Promise.all(promises);
    res.json(skills)
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;