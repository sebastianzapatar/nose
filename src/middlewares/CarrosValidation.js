"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarDatos = void 0;
const express_validator_1 = require("express-validator");
const jwt_handle_1 = require("../utils/jwt.handle");
const validarDatos = [
    (0, express_validator_1.body)('id').isNumeric(),
    (0, express_validator_1.body)('marca').isLength({ min: 5 }).exists(),
    (0, express_validator_1.body)('modelo').isLength({ min: 5 }),
    (0, express_validator_1.body)('ano').isNumeric(),
    (req, res, next) => {
        try {
            const result = (0, express_validator_1.validationResult)(req);
            if (result.array().length === 0) {
                const jwtByUser = req.headers.authorization || '';
                const jwt = jwtByUser.split(' ')[1];
                const validateJwt = (0, jwt_handle_1.VerifyToken)(jwt);
                const rol = validateJwt.rol;
                if (rol.toLocaleLowerCase() === "admin") {
                    next();
                    return;
                }
                res.status(401).send({ message: 'No tiene las credenciales' });
            }
            console.log(result.array().length);
            res.send({ errors: result.array() });
        }
        catch (e) {
            res.send({ errors: 'invalid session' });
        }
    }
];
exports.validarDatos = validarDatos;
