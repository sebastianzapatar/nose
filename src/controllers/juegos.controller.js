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
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarJuego = exports.borrarJuego = exports.insertarJuego = exports.verJuegos = void 0;
const Juego_service_1 = require("../services/Juego.service");
const verJuegos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const juegos = yield (0, Juego_service_1.getGames)();
    res.status(201).send(juegos);
});
exports.verJuegos = verJuegos;
const insertarJuego = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = req.body;
    const juego = yield (0, Juego_service_1.insertrGame)(datos);
    res.status(200).send(juego);
});
exports.insertarJuego = insertarJuego;
const borrarJuego = (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const juego = yield (0, Juego_service_1.deleteGame)(id);
    return juego;
});
exports.borrarJuego = borrarJuego;
const actualizarJuego = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const datos = req.body;
    const juego = yield (0, Juego_service_1.updateGame)(id, datos);
    res.status(201).send(juego);
});
exports.actualizarJuego = actualizarJuego;
