import { Router} from "express";
import { getCarros, guardarCarros } from "../controllers/carros.controller";
const router=Router();

router.get('/',getCarros)
router.post('/',guardarCarros);
// exportar la ruta
export {router};