import { Request,Response } from "express";
import { Carro } from "../models/Carro.interface";
import { getCarros,insertarCarro,getCarro,buscar,
        findbyYear, deleteCarro,actualizarCarro } 
from "../services/carro.service";

const getCarroC=async(req:Request,res:Response)=>{
    try{
        const id=req.params.id;
        console.log(id);
        const carro=await getCarro(id);
        if(carro.length==0){
            res.status(404).send
            ({message:'no se encuentra el vehiculo'});
        }
        else
            res.status(200).send(carro);
    }
    catch(e){
       res.status(404).send({message:"Error en la búsqueda"});
    }
}
const getCarrosB=async(req:Request,res:Response)=>{
    try{
        const parametro=req.params.parametro;
        const carro=await buscar(parametro);
        if(carro.length==0){
            res.status(404).send
            ({message:
                'no se encuentran vehículos'});
        }
        else
            res.status(200).send(carro);
    }
    catch(e){

    }
}
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
const getByYear=async(req:Request,res:Response)=>{
    try{
        const year=req.params.parametro;
        const nyear=Number(year);
        const response=await findbyYear(nyear);
        if(response.length==0){
            res.status(404).send
            ({message:
                'no se encuentran vehículos'});
        }
        else
            res.status(200).send(response);
    }   
    catch(e){
        console.log(e);
    }
}
const deleteById=async(req:Request,res:Response)=>{
    try{
        const id=req.params.id;
        const response=await deleteCarro(id);
        res.status(202).send(response);
    }
    catch(e){
        console.log("Error");
        
    }
}
const updateCar=async(req:Request,res:Response)=>{
    try{
        const id=req.params.id;
        const nuevoCarro:Carro=req.body;
        const response=await actualizarCarro(id,nuevoCarro);
        res.status(202).send(response);
    }
    catch(e){
        console.log(e);
    }
}
export {getCarrosC,guardarCarros,
    getCarroC,getCarrosB,getByYear,deleteById,updateCar};