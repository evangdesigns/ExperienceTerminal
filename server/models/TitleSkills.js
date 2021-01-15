const mongoose = require('mongoose');

const titleSkillsSchema = mongoose.Schema({
  title_skills_id: { type: Number, required: true },
  title_id: { type: Number, ref: 'Title', required: true },
  skill_id: { type: Number, ref: 'TitleSkills', required: true },
},
  {collection: 'title_skills_table'}
);

module.exports = mongoose.model('TitleSkills', titleSkillsSchema);