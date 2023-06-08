import { NextFunction,Request,Response } from "express";
import { body, validationResult } from "express-validator";

const validarDatosUsuario=[
    body('name').isEmail(),
    body('password').isLength({ min: 8 }),
    body('rol').isLength({ min: 4 }),
    (req:Request,res:Response,next:NextFunction)=>{
        const result = validationResult(req);
        if(result.array().length===0){
            next();
            return;
        }
        console.log(result.array().length);
        
        res.send({ errors: result.array() });
    }
]
export {validarDatosUsuario};