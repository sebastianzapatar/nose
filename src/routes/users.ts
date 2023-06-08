import { Router } from "express";
import { registrar } from "../controllers/user.controller";

const router=Router();
router.post("/registrar", registrar);
export {router};