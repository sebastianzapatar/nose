import { Router } from "express";
import { registrar,login } from "../controllers/user.controller";

const router=Router();
router.post("/registrar", registrar);
router.post("/login",login);
export {router};