"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarAnnoMayor = exports.validarAnno = exports.primerMiddleware = void 0;
const primerMiddleware = (req, res, next) => {
    console.log('Hola desde mi middleware');
    next();
    console.log('Adios me voy para no volver');
};
exports.primerMiddleware = primerMiddleware;
const validarAnno = (req, res, next) => {
    const year = req.params.parametro;
    if (Number(year) < 1950) {
        res.status(404).send({
            message: "Año inválido"
        });
    }
    next();
};
exports.validarAnno = validarAnno;
const validarAnnoMayor = (req, res, next) => {
    const year = req.params.parametro;
    if (Number(year) < 1950) {
        res.status(404).send({
            message: "Año inválido menor a 2024"
        });
    }
    next();
};
exports.validarAnnoMayor = validarAnnoMayor;
