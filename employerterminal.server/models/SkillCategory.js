const mongoose = require('mongoose');

const skillCategorySchema = mongoose.Schema({
  skill_category_id: { type: Number, required: true },
  skill_category_name: { type: String, required: true }
},
  {collection: 'skill_category_table'}
);

module.exports = mongoose.model('SkillCategory', skillCategorySchema);