const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  skill_id: { type: Number, required: true },
  skill_category: { type: Number, ref: 'SkillCategory', required: true },
  skill_name: { type: String, required: true },
  skill_icon: { type: String, required: true }
},
  {collection: 'skills_table'}
);

module.exports = mongoose.model('Skills', skillSchema);
