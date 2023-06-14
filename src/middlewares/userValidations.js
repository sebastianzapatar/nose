"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const express_validator_1 = require("express-validator");
/*
name:string,
    password:string,//vamos a encriptar
    rol:string
*/
const validateUser = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Campo obligatorio").
        isEmail(),
    (0, express_validator_1.body)("password").isLength({ min: 10 })
        .isStrongPassword(),
    (0, express_validator_1.body)('rol').isLength({ min: 5 }),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.array().length === 0) {
            next();
            return;
        }
        console.log(errors);
        res.status(403).send({ message: errors });
    }
];
exports.validateUser = validateUser;
