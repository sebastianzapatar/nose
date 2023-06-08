import { NextFunction,Request,Response } from "express";
import { body, validationResult } from "express-validator";

/*
name:string,
    password:string,//vamos a encriptar
    rol:string
*/
const validateUser=[
    body("name").notEmpty().withMessage("Campo obligatorio").
    isEmail(),
    body("password").isLength({min:10})
    .isStrongPassword(),
    body('rol').isLength({min:5}),
    (req:Request,res:Response,next:NextFunction)=>{
        const errors=validationResult(req);
        if(errors.array().length===0){
            next();
            return;
        }
        console.log(errors);
        res.status(403).send({message:errors})
    }
]
export {validateUser}