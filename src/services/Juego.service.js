"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGame = exports.updateGame = exports.insertrGame = exports.getGames = void 0;
const Juego_model_1 = __importDefault(require("../models/Juego.model"));
const getGames = () => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield Juego_model_1.default.find({});
    return games;
});
exports.getGames = getGames;
const insertrGame = (game) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoJuego = yield Juego_model_1.default.create(game);
    console.log(nuevoJuego);
    return nuevoJuego;
});
exports.insertrGame = insertrGame;
const updateGame = (_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const actualizado = yield Juego_model_1.default.updateOne({ _id: _id }, data);
    return actualizado;
});
exports.updateGame = updateGame;
const deleteGame = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const borrado = yield Juego_model_1.default.deleteOne({ _id: _id });
    return borrado;
});
exports.deleteGame = deleteGame;
