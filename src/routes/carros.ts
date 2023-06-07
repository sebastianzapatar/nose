import { Router } from "express";

import { getCarrosC, guardarCarros,
    getCarroC,getCarrosB,getByYear,deleteById } 
from "../controllers/carros.controller";
const router=Router();

router.get('/:id',getCarroC);
router.get('/buscar/:parametro',getCarrosB);
router.get('/buscarY/:parametro',getByYear);
router.get('/',getCarrosC);
router.post('/',guardarCarros);
router.delete('/:id',deleteById);
// exportar la ruta
export {router};