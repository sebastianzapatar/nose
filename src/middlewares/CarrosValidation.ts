import { NextFunction,Request,Response } from "express";
import { body, validationResult } from "express-validator";
import { VerifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
const validarDatos=[
    body('id').isNumeric(),
    body('marca').isLength({ min: 5 }).exists(),
    body('modelo').isLength({ min: 5 }),
    body('ano').isNumeric(),
    (req:Request,res:Response,next:NextFunction)=>{
        try{
        const result = validationResult(req);
        if(result.array().length===0){
            const jwtByUser=req.headers.authorization||'';
            const jwt=jwtByUser.split(' ')[1];
            const validateJwt=VerifyToken(jwt) as JwtPayload;
            const rol:string=validateJwt.rol;
            if(rol.toLocaleLowerCase()==="admin"){
                next();
                return;
            }
            res.status(401).send({message:'No tiene las credenciales'});
            
        }
        console.log(result.array().length);
        
        res.send({ errors: result.array() });
        }
        catch(e){
            res.send({ errors: 'invalid session' });
        }
        
    }
]
export {validarDatos};
