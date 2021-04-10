const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  note: String,
  items: [],
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;