const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  speedrun: {
    type: Number
  },
  releasedate: {
    type: Date,
    default: Date.now // Establecer la fecha actual como valor predeterminado
  },
  publisher: {
    type: String,
    
  },
  genre: {
    type: [String],
    required: true
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;