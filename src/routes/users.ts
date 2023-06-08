import { Router } from "express";
import { registrar,login } from "../controllers/user.controller";
import { validarDatosUsuario } from "../middlewares/validarDatos";
const router=Router();
router.post("/registrar", validarDatosUsuario,registrar);
router.post("/login",login);
export {router};