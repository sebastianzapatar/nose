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
exports.actualizarCarro = exports.deleteCarro = exports.findbyYear = exports.buscar = exports.getCarro = exports.insertarCarro = exports.getCarros = void 0;
const Carro_model_1 = __importDefault(require("../models/Carro.model"));
const getCarros = () => __awaiter(void 0, void 0, void 0, function* () {
    const carros = yield Carro_model_1.default.find({});
    return carros;
});
exports.getCarros = getCarros;
const insertarCarro = (carro) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoCarro = yield Carro_model_1.default.create(carro);
    return nuevoCarro;
});
exports.insertarCarro = insertarCarro;
const getCarro = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const carro = yield Carro_model_1.default.find({ _id: _id });
    console.log(carro);
    return carro;
});
exports.getCarro = getCarro;
const buscar = (parametro) => __awaiter(void 0, void 0, void 0, function* () {
    const carros = yield Carro_model_1.default.find({ $or: [{ marca: parametro },
            { modelo: parametro }] });
    return carros;
});
exports.buscar = buscar;
const findbyYear = (year) => __awaiter(void 0, void 0, void 0, function* () {
    const carros = yield Carro_model_1.default.find({ ano: { $gte: year } });
    return carros;
});
exports.findbyYear = findbyYear;
const deleteCarro = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const borrado = yield Carro_model_1.default.deleteOne({ _id: _id });
    return borrado;
});
exports.deleteCarro = deleteCarro;
const actualizarCarro = (_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const actualizado = yield Carro_model_1.default.updateOne({ _id: _id }, data);
    return actualizado;
});
exports.actualizarCarro = actualizarCarro;
