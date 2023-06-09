import {NextFunction, Request, Response} from 'express';
import {VerifyToken} from '../utils/jwt.handle';

const checkJWT=(req:Request,res:Response,next:NextFunction)=>{
    
    try{
        const jwtByUser=req.headers.authorization||'';
    console.log(jwtByUser);
    const jwt=jwtByUser.split(' ')[1];
    const isOk=VerifyToken(jwt);
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
export {checkJWT}