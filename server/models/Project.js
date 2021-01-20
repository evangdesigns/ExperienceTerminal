const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  project_id: { type: Number, required: true },
  project_section_id: { type: Number, ref: 'ProjectSection', required: true },
  project_name: { type: String, required: true },
  project_description: { type: String, required: true },
  project_image_url: { type: String, required: true },
  project_url: { type: String, required: true },
  project_git_url: { type: String, required: true }
},
  {collection: 'project_table'}
);

module.exports = mongoose.model('Project', projectSchema);