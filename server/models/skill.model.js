const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let skillSchema = new Schema({
  skill_id: {
    type: Number
  },
  skill_category: {
    type: Number
  },
  skill_name: {
    type: String
  },
  skill_icon: {
    type: String
  }
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;