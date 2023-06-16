import { model,Schema } from "mongoose";
import { Compra } from "./Compra.interface";

const CompraScheme=new Schema<Compra>({
    valor:{
        type:Number,
        required:true
    },
    idCarro:{
        type:String,
        required:true
        
    },
    idUsuario:{
        type:String,
        required:true
    },
    fechaCompra:{
        type:Date,
        default:Date.now()
    }
});
const CompraModel=model('compras',CompraScheme);
export default CompraModel;