import {NextFunction, Request, Response} from 'express';
import {VerifyToken,obtenerRol} from '../utils/jwt.handle';
import { User } from "../models/User.interface";
import UserModel from "../models/User.model";
import { JwtPayload } from 'jsonwebtoken';
const checkJWT=async (req:Request,res:Response,next:NextFunction)=>{
    
    try{
    const jwtByUser=req.headers.authorization||'';
    console.log(jwtByUser);
    const jwt=jwtByUser.split(' ')[1];
    const isOk=VerifyToken(jwt);
    console.log(isOk);
    
    if(isOk){
        
        next();
        return
    }
    res.status(401).send({
        message:'Invalid session'
    })
    }
    catch(e){
        res.status(400).send({message:'invalid session'});
    }
    
}
const checkIsAdmin=async(req:Request,res:Response,next:NextFunction)=>{
    
    try{
        const jwtByUser=req.headers.authorization||'';
        console.log(jwtByUser);
        const jwt=jwtByUser.split(' ')[1];
        const isOk=VerifyToken(jwt) as JwtPayload;
        const rol:string=isOk.rol;
        if(rol.toLowerCase()==='admin'){
            next();
            return;
        }
        res.status(401).send({
            message:'Sin permisos para ejecutar esta opcion'
        })

    }
    catch(e){
        res.status(400).send({message:'invalid session'});
    }
}
export {checkJWT,checkIsAdmin}