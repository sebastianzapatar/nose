import { Router } from "express";
import { verCompras,guardarCompra } from "../controllers/compras.controller";
import { checkJWT } from "../middlewares/checkJWT";

const router=Router();
router.get('/',checkJWT,verCompras);
router.post('/',checkJWT,guardarCompra);
export {router};