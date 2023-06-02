import { Request,Response } from "express";
import { Carro } from "../models/Carro.interface";

const carros:Carro[]=[{
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
export {getCarros};