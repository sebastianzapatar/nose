"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserScheme = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 8
    },
    password: {
        type: String,
        required: true,
        minlength: 10
    },
    rol: {
        type: String,
        default: 'esclavo',
        minlength: 5
    }
});
const UserModel = (0, mongoose_1.model)('users', UserScheme);
exports.default = UserModel;
