import { Router,Request,Response } from "express";
import { verJuegos,insertarJuego, borrarJuego, actualizarJuego } from "../controllers/juegos.controller";
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
router.get('/',verJuegos);
router.post('/',insertarJuego);
router.delete('/:id',borrarJuego);
router.put('/:id',actualizarJuego);
// exportar la ruta
export {router};