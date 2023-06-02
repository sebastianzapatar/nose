import { Router} from "express";
import { getCarrosC, guardarCarros } from "../controllers/carros.controller";
const router=Router();

router.get('/',getCarrosC)
router.post('/',guardarCarros);
// exportar la ruta
export {router};