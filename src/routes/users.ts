import { Router } from "express";
import { registrar,login } from "../controllers/user.controller";
import { validateUser } from "../middlewares/userValidations";

const router=Router();
router.post("/registrar", validateUser,registrar);
router.post("/login",login);
export {router};