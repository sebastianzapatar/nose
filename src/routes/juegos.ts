import { Router } from "express";
import { verJuegos,insertarJuego, borrarJuego, actualizarJuego } 
from "../controllers/juegos.controller";
import { checkIsAdmin} from "../middlewares/checkJWT";
const router=Router();
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
router.get('/',verJuegos);
router.post('/',[checkIsAdmin],insertarJuego);
router.delete('/:id',borrarJuego);//segundon o admin
router.put('/:id',actualizarJuego);//segundon
/*
roles: admin, esclavo, segundon
*/
// exportar la ruta
export {router};