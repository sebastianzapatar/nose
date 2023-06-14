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
exports.checkIsAdmin = exports.checkJWT = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jwtByUser = req.headers.authorization || '';
        console.log(jwtByUser);
        const jwt = jwtByUser.split(' ')[1];
        const isOk = (0, jwt_handle_1.VerifyToken)(jwt);
        console.log(isOk);
        if (isOk) {
            next();
            return;
        }
        res.status(401).send({
            message: 'Invalid session'
        });
    }
    catch (e) {
        res.status(400).send({ message: 'invalid session' });
    }
});
exports.checkJWT = checkJWT;
const checkIsAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jwtByUser = req.headers.authorization || '';
        console.log(jwtByUser);
        const jwt = jwtByUser.split(' ')[1];
        const isOk = (0, jwt_handle_1.VerifyToken)(jwt);
        const rol = isOk.rol;
        if (rol.toLowerCase() === 'admin') {
            next();
            return;
        }
        res.status(401).send({
            message: 'Sin permisos para ejecutar esta opcion'
        });
    }
    catch (e) {
        res.status(400).send({ message: 'invalid session' });
    }
});
exports.checkIsAdmin = checkIsAdmin;
