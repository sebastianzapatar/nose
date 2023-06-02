import { Request,Response } from "express";
import { Carro } from "../models/Carro.interface";
import { getCarros } from "../services/carro.service";
const getCarrosC=async(req:Request,res:Response)=>{
    try{
        const response=await getCarros();
        res.status(200).send(response);
    }
    catch(e){
        console.log(e);
    }
    
}
const guardarCarros=(req:Request,res:Response)=>{
    console.log(req);
    const nuevoCarro:Carro=req.body;
    
    res.send();
    
}
export {getCarrosC,guardarCarros};