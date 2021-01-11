const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let titleSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  title_id: {
    type: Number,
    required: true
  },
  title_name: {
    type: String,
    required: true
  },
  title_icon: {
    type: String,
    required: true
  }
});

const Title = mongoose.model('Title', titleSchema);

module.exports = Title;