const mongoose = require('mongoose');

const projectSectionSchema = mongoose.Schema({
  project_section_id: { type: Number, required: true },
  title_id: { type: Number, ref: 'Title', required: true },
  project_section_name: { type: String, required: true },
},
  {collection: 'project_section_table'}
);

module.exports = mongoose.model('ProjectSection', projectSectionSchema);