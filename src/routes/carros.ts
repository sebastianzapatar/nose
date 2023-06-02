import { Router,Request,Response } from "express";
import { getCarros } from "../controllers/carros.controller";
const router=Router();

router.get('/',getCarros)
// exportar la ruta
export {router};