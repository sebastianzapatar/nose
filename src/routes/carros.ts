import { Router } from "express";

import { getCarrosC, guardarCarros,
    getCarroC,getCarrosB,getByYear,deleteById,updateCar } 
from "../controllers/carros.controller";
import { primerMiddleware, validarAnno, validarAnnoMayor } from "../middlewares/log";
import { validarDatos } from "../middlewares/CarrosValidation";
import { checkJWT } from "../middlewares/checkJWT";
const router=Router();
router.get('/:id',getCarroC);
router.get('/buscar/:parametro',getCarrosB);
router.get('/buscarY/:parametro',
[validarAnno,validarAnnoMayor],getByYear);
router.get('/',primerMiddleware,getCarrosC);
router.post('/',validarDatos,guardarCarros);
router.delete('/:id',checkJWT,deleteById);
router.put('/:id',updateCar);


export {router};