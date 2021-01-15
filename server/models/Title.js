const mongoose = require('mongoose');

const titleSchema = mongoose.Schema({
  title_id: { type: Number, required: true },
  title_name: { type: String, required: true },
  title_icon: { type: String, required: true }
},
  {collection: 'title_table'}
);

module.exports = mongoose.model('title', titleSchema);