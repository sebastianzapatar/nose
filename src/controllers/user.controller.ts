import { Request,Response } from "express";
import { registrarUsuario } from "../services/user.service";

const registrar=async(req:Request,res:Response)=>{
    const user=req.body;
    const newUser=await registrarUsuario(user);
    res.status(200).send(newUser);
}
export {registrar};