const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./item.js')

const sectionSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  note: String,
  items: [],
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;