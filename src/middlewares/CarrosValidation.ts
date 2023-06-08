import { NextFunction,Request,Response } from "express";
import { body, validationResult } from "express-validator";
const validarDatos=[
    body('id').isNumeric(),
    body('marca').isLength({ min: 5 }).exists(),
    body('modelo').isLength({ min: 5 }),
    body('ano').isNumeric(),
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
export {validarDatos};
