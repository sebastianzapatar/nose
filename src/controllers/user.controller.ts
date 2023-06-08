import { Request,Response } from "express";
import { registrarUsuario,loginUsuario } 
from "../services/user.service";

const registrar=async(req:Request,res:Response)=>{
    const user=req.body;
    const newUser=await registrarUsuario(user);
    res.status(200).send(newUser);
}
const login=async(req:Request,res:Response)=>{
    const user=req.body;
    const loginUser=await loginUsuario(user);
    if(loginUser==='User not exist' || 
    loginUser==='Usuario o password incorrectos'){
        res.status(403).send({message:loginUser});
    }
    else{
        res.status(200).send(loginUser);
    }
    
}
export {registrar,login};