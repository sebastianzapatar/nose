import "dotenv"
import { sign,verify,JwtPayload } from "jsonwebtoken";
const JWT_SECRET=process.env.JWT_SECRET||"lafrase";
const singToken=async(id:string,rol:string)=>{
    const jwt=sign({id,rol},JWT_SECRET,{
        expiresIn:"2h"
    });
    return jwt;
}
const VerifyToken=(jwt:string)=>{
    const isOk= verify(jwt,JWT_SECRET);
    console.log(isOk);
    return isOk;
    
}
const obtenerRol=(jwt:string)=>{
    const jwtInfo=verify(jwt,JWT_SECRET) as JwtPayload;
    const {rol}=jwtInfo;
    return rol;
}
export {singToken,VerifyToken,obtenerRol};