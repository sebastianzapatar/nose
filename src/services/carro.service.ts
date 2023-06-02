import { Carro } from "../models/Carro.interface";
import CarroModel from "../models/Carro.model";

const getCarros=async()=>{
    const carros=await CarroModel.find({});
    return carros;
}
export {getCarros};