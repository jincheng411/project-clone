const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  note: String,
  items: [
    {
      name: {
        type: String,
        require: true,
      },
      price: [],
      cal: {
        type: String,
        require: true,
      },
      img: {
        type: String,
        require: true,
      },
      options: [],
    }
  ],
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;