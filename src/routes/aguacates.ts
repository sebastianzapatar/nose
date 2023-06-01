import { Router,Request,Response } from "express";

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
router.get('/',(req:Request,res:Response)=>{
    res.send({message:"Hola soy un aguacate"});
})
// exportar la ruta
export {router};