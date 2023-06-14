"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const carros_controller_1 = require("../controllers/carros.controller");
const log_1 = require("../middlewares/log");
const CarrosValidation_1 = require("../middlewares/CarrosValidation");
const checkJWT_1 = require("../middlewares/checkJWT");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * @swagger
 * /Carros  :
 *  get:
 *    summary: Returns a list of cars
 *    tags: [cars]
 *    responses:
 *      200:
 *        description: the list of cars
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *
 */
router.get('/:id', carros_controller_1.getCarroC);
router.get('/buscar/:parametro', carros_controller_1.getCarrosB);
router.get('/buscarY/:parametro', [log_1.validarAnno, log_1.validarAnnoMayor], carros_controller_1.getByYear);
router.get('/', log_1.primerMiddleware, carros_controller_1.getCarrosC);
router.post('/', CarrosValidation_1.validarDatos, carros_controller_1.guardarCarros);
router.delete('/:id', checkJWT_1.checkJWT, carros_controller_1.deleteById);
router.put('/:id', carros_controller_1.updateCar);
