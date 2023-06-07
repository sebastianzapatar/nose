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
const getCarro=async(_id:string)=>{
    const carro=await CarroModel.find({_id:_id});
    console.log(carro);
    return carro;
}
const buscar=async(parametro:string)=>{
    const carros=await CarroModel.find({$or:[{marca:parametro},
    {modelo:parametro}]});
    return carros;

}
const findbyYear=async(year:number)=>{
    const carros=await CarroModel.find({ano:
        {$gte:year}});
    return carros;
}
const deleteCarro=async(_id:string)=>{
    const borrado=await CarroModel.deleteOne({_id:_id});
    return borrado;
}
const actualizarCarro=async(_id:string,data:Carro)=>{
    const actualizado=await CarroModel.updateOne({_id:_id},data);
    return actualizado;
}
export {getCarros,insertarCarro,
    getCarro,buscar,findbyYear,deleteCarro,actualizarCarro};