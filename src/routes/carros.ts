import { Router } from "express";

import { getCarrosC, guardarCarros,
    getCarroC,getCarrosB,getByYear,deleteById,updateCar } 
from "../controllers/carros.controller";
import { primerMiddleware, validarAnno, validarAnnoMayor } from "../middlewares/log";
import { validarDatosCarro } from "../middlewares/validarDatos";
const router=Router();
router.get('/:id',getCarroC);
router.get('/buscar/:parametro',getCarrosB);
router.get('/buscarY/:parametro',
[validarAnno,validarAnnoMayor],getByYear);
router.get('/',primerMiddleware,getCarrosC);
router.post('/',validarDatosCarro,guardarCarros);
router.delete('/:id',deleteById);
router.put('/:id',updateCar);
// exportar la ruta
export {router};