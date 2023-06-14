"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const routes_1 = require("./routes");
const swagger_utils_1 = require("./utils/swagger.utils");
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
const specs = (0, swagger_jsdoc_1.default)(swagger_utils_1.options);
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
(0, dbConnection_1.default)().then(() => console.log('Se conecto a la BD'))
    .catch(() => console.log("No se pudo conectar"));
app.listen(PORT, () => console.log('Corriendo en localhost' + PORT));
