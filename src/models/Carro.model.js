"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CarroScheme = new mongoose_1.Schema({
    id: {
        type: Number
    },
    marca: {
        type: String,
    },
    modelo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        default: 2022
    }
});
const CarroModel = (0, mongoose_1.model)('carros', CarroScheme);
exports.default = CarroModel;
