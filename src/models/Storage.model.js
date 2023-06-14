"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StorageSchema = new mongoose_1.Schema({
    fileName: {
        type: String
    },
    idUser: {
        type: String
    },
    path: {
        type: String
    }
});
const StorageModel = (0, mongoose_1.model)("storage", StorageSchema);
exports.default = StorageModel;
