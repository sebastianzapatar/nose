import { Carro } from "../models/Carro.interface";
import CarroModel from "../models/Carro.model";

const getCarros=async()=>{
    const carros=await CarroModel.find({});
    return carros;
}
const insertarCarro=async(carro:Carro)=>{
    const nuevoCarro=await CarroModel.create(carro);
    return nuevoCarro;
}
export {getCarros,insertarCarro};