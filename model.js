const mongoose = require('mongoose');
const Wrap = mongoose.model('Wrap', new mongoose.Schema({
  brand: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  size: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  },
  src: {
    type: String,
    required: false
  },
  isAvailable: {
    type: Boolean,
    required: false
  },
  borrowerName: {
    type: String,
    required: false
  },
  borrowerNumber: {
    type: String,
    required: false
  },
  borrowerEmail: {
    type: String,
    required: false
  }
}));

module.exports = { Wrap };
