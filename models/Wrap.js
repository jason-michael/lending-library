const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WrapSchema = new Schema({
  lenderName: {
    type: String,
    required: false
  },
  lenderNumber: {
    type: Number,
    required: false
  },
  borrowerName: {
    type: String,
    required: false
  },
  borrowerNumber: {
    type: Number,
    required: false
  },
  isAvailable: {
    type: Boolean,
    required: false
  },

});

const Wrap = mongoose.model('Wrap', WrapSchema);
module.exports = Wrap;
