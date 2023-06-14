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
exports.loginUsuario = exports.registrarUsuario = void 0;
const User_model_1 = __importDefault(require("../models/User.model"));
const bcript_handle_1 = require("../utils/bcript.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const registrarUsuario = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password, rol } = user;
    const userExist = yield User_model_1.default.findOne({ name: name });
    if (userExist) {
        return "Usario ya existe :(";
    }
    const passwordHash = yield (0, bcript_handle_1.encrypt)(password);
    const newUser = yield User_model_1.default.create({ name, password: passwordHash, rol });
    return newUser;
});
exports.registrarUsuario = registrarUsuario;
const loginUsuario = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = user;
    const userExist = yield User_model_1.default.findOne({ name: name });
    if (!userExist) {
        return 'User not exist';
    }
    const passwordHash = userExist.password;
    const isMatch = yield (0, bcript_handle_1.verify)(password, passwordHash);
    if (!isMatch) {
        return 'Usuario o password incorrectos';
    }
    const token = yield (0, jwt_handle_1.singToken)(name, userExist.rol);
    const data = { token: token,
        user: {
            name: name,
            rol: userExist.rol
        } };
    return data;
});
exports.loginUsuario = loginUsuario;
