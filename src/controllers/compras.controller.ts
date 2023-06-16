import { Request, Response } from "express";
import CarroModel from '../models/Carro.model';
import UserModel from '../models/User.model';
import { VerifyToken } from "../utils/jwt.handle";

import { getComprasCarros,getComprasUsuarios,
 saveCompra,deleteCompra,getCompras} from "../services/compras.service";
import { JwtPayload } from "jsonwebtoken";
import { Compra } from "../models/Compra.interface";

 const verCompras=async(req:Request,res:Response)=>{
    const compras=await getCompras();
    res.status(200).send(compras);
}
const guardarCompra=async(req:Request,res:Response)=>{
    try{
        let datos:Compra=req.body;
        const jwtByUser=req.headers.authorization||'';
        const jwt=jwtByUser.split(' ')[1];
        const isOk=VerifyToken(jwt) as JwtPayload;
        const {idCarro}=datos;
        const user=isOk.id;
        const carro=await CarroModel.findOne({_id:idCarro});
        console.log(user,carro);
        datos.idUsuario=user;
        if(!user || !carro){
            res.status(404).send({
            error:"No se encuentra el usuario o el carro"
        })
        return;
        }
        const compra=await saveCompra(datos);
        res.status(201).send(compra);
    }
    catch(e){
        res.status(500).send("Error al crear la compra");
    }


}
export {verCompras,guardarCompra};
