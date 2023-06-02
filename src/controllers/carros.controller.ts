import { Request,Response } from "express";
import { Carro } from "../models/Carro.interface";

let carros:Carro[]=[{
    id:1,
    marca:'Ford',
    modelo:'Raport',
    ano:2023
    },
    {
        id:2,
        marca:'BMW',
        modelo:'X5',
        ano:2020
    },
    {
        id:3,
        marca:'Audi',
        modelo:'Q4',
        ano:2023
    }
]
const getCarros=(req:Request,res:Response)=>{
    res.send(carros);
}
const guardarCarros=(req:Request,res:Response)=>{
    console.log(req);
    const nuevoCarro:Carro=req.body;
    carros.push(nuevoCarro);
    res.send(carros);
    
}
export {getCarros,guardarCarros};