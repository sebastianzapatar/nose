import { Request,Response } from "express";
import { Carro } from "../models/Carro.interface";
import { getCarros,insertarCarro } from "../services/carro.service";
const getCarrosC=async(req:Request,res:Response)=>{
    try{
        const response=await getCarros();
        res.status(200).send(response);
    }
    catch(e){
        console.log(e);
    }
    
}
const guardarCarros=async(req:Request,res:Response)=>{
    
    try{
        const nuevoCarro:Carro=req.body;
        const response=await insertarCarro(nuevoCarro);
        res.status(201).send(response);
    }
    catch(e){
        console.log(e);
    }   
    
    
}
export {getCarrosC,guardarCarros};