const { Schema, model } = require('mongoose');

const dogSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
  },
  spaynuet: {
    type: Boolean,
    required: true,
  },
})

const Dog = model('Dog', dogSchema);

module.exports = Dog;