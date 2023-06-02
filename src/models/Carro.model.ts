import { model,Schema } from "mongoose";
import { Carro } from "./Carro.interface";
const CarroScheme=new Schema<Carro>({
    id:{
        type:Number
    },
    marca:{
        type:String,
        
    },
    modelo:{
        type:String,
        required:true
    },
    ano:{
        type:Number,
        default:2022
    }
});
const CarroModel=model('carros',CarroScheme);
export default CarroModel;