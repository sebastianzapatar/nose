import { Router } from "express";
import { getFile } from "../controllers/upload.controller";
import multerMiddleware from "../middlewares/storage";
import { checkJWT } from "../middlewares/checkJWT";

const router=Router();
router.post("/file",checkJWT,multerMiddleware.single('myfile'),getFile);

export {router}