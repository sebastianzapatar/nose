import CompraModel from "../models/Compra.model";
import { Compra } from "../models/Compra.interface";
const getCompras=async()=>{
    return await CompraModel.find({});
}
const getComprasUsuarios=async(id:string)=>{
    return await CompraModel.find({idUsuario:id});
}
const getComprasCarros=async(id:String)=>{
    return await CompraModel.find({idCarro:id})
}
const saveCompra=async(compra:Compra)=>{
    const nuevaCompra=await CompraModel.create(compra);
    return nuevaCompra;
}
const deleteCompra=async(id:string)=>{
    try{
        return CompraModel.deleteOne({id:id})
    }
    catch(e){
        console.log("Error");
        
    }
}
export {getCompras,getComprasUsuarios,getComprasCarros,
saveCompra,deleteCompra};