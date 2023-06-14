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
exports.obtenerRol = exports.VerifyToken = exports.singToken = void 0;
require("dotenv");
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "lafrase";
const singToken = (id, rol) => __awaiter(void 0, void 0, void 0, function* () {
    const jwt = (0, jsonwebtoken_1.sign)({ id, rol }, JWT_SECRET, {
        expiresIn: "2h"
    });
    return jwt;
});
exports.singToken = singToken;
const VerifyToken = (jwt) => {
    const isOk = (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
    console.log(isOk);
    return isOk;
};
exports.VerifyToken = VerifyToken;
const obtenerRol = (jwt) => {
    const jwtInfo = (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
    const { rol } = jwtInfo;
    return rol;
};
exports.obtenerRol = obtenerRol;
