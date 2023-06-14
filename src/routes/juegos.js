"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const juegos_controller_1 = require("../controllers/juegos.controller");
const checkJWT_1 = require("../middlewares/checkJWT");
const router = (0, express_1.Router)();
exports.router = router;
/*
get obtener datos
post enviar datos
put editar un registro
delete eliminar un registro
patch editar parcialmente un registro
*/
//La dirección del proyecto donde apunta
// tiene una función, viene de los controladores
/**
 * @swagger
 * /juegos  :
 *  get:
 *    summary: Returns a list of games
 *    tags: [games]
 *    responses:
 *      200:
 *        description: the list of games
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *
 */
router.get('/', juegos_controller_1.verJuegos);
router.post('/', [checkJWT_1.checkIsAdmin], juegos_controller_1.insertarJuego);
router.delete('/:id', juegos_controller_1.borrarJuego); //segundon o admin
router.put('/:id', juegos_controller_1.actualizarJuego); //segundon
