"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const upload_controller_1 = require("../controllers/upload.controller");
const storage_1 = __importDefault(require("../middlewares/storage"));
const checkJWT_1 = require("../middlewares/checkJWT");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/file", checkJWT_1.checkJWT, storage_1.default.single('myfile'), upload_controller_1.getFile);
