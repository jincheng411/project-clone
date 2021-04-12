const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  cal: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  options: [],
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;