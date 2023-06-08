import { Router,Request,Response } from "express";
import { insertarJuego } from "../controllers/juegos.controller";
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
router.post('/',insertarJuego);
// exportar la ruta
export {router};