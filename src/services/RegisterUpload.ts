import { Storage } from "../models/Storage.interface";
import StorageModel from "../models/Storage.model";
const registerUpload=async({fileName,idUser,path}:Storage)=>{
    const responseItem=await StorageModel.create({fileName,idUser,path});
    return responseItem;
}
export {registerUpload};