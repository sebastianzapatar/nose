"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
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
const Game = (0, mongoose_1.model)('Game', gameSchema);
exports.default = Game;
