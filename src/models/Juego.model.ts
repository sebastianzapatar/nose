import {model,Schema} from 'mongoose';
import { Juego } from './Juego.interface';

const gameSchema = new Schema<Juego>({
  name: {
    type: String,
    required: true
  },
  speedrun: {
    type: String
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

const Game = model('Game', gameSchema);

export default Game;