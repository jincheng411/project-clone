const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  note: String,
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }],
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;