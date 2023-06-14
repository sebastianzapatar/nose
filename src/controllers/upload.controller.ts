import { Response } from "express";
import { RequestExt } from "../models/ResquestExt";
import { Storage } from "../models/Storage.interface";
import { registerUpload } from "../services/RegisterUpload";
import { handleHttp } from "../utils/errors.handle";

const getFile=async(req:RequestExt, res:Response)=>{
    try{
        const {user,file}=req;
        const dataToRegister:Storage={
            fileName:`${file?.filename}`,
            idUser:`${user?.id}`,
            path:`${file?.path}`
        };
        const response=await registerUpload(dataToRegister);
        res.status(200).send(response);
    }
    catch(e){
        handleHttp(res,'Cannot get the image');
    }
}
export {getFile}