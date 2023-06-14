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
exports.login = exports.registrar = void 0;
const user_service_1 = require("../services/user.service");
const registrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const newUser = yield (0, user_service_1.registrarUsuario)(user);
    res.status(200).send(newUser);
});
exports.registrar = registrar;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const loginUser = yield (0, user_service_1.loginUsuario)(user);
    if (loginUser === 'User not exist' ||
        loginUser === 'Usuario o password incorrectos') {
        res.status(403).send({ message: loginUser });
    }
    else {
        res.status(200).send(loginUser);
    }
});
exports.login = login;
