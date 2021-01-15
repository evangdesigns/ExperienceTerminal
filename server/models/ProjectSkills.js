const mongoose = require('mongoose');

const projectSkillsSchema = mongoose.Schema({
  project_skills_id: { type: Number, required: true },
  skill_id: { type: Number, ref: 'Skills', required: true },
  project_section_id: { type: Number, ref: 'ProjectSection', required: true },
},
  {collection: 'project_skills_table'}
);

module.exports = mongoose.model('ProjectSkills', projectSkillsSchema);