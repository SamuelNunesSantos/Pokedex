const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  type: String,
  description: String,
  imgPath: String,
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
