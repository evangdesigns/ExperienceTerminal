const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  image_id: { type: Number, required: true },
  project_id: { type: Number, ref: 'Project', required: true },
  image_url: { type: String, required: true },
  image_alt_text: { type: String, required: true }
},
  {collection: 'image_table'}
);

module.exports = mongoose.model('Image', imageSchema);