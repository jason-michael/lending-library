const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WrapSchema = new Schema({
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
  isAvailable: {
    type: Boolean,
    required: false
  },
  image: {
    type: String,
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
});

const Wrap = mongoose.model('Wrap', WrapSchema);
module.exports = Wrap;
