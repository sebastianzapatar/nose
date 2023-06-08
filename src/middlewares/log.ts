import { NextFunction,Request,Response } from "express";

const primerMiddleware=(req:Request,res:Response,
    next:NextFunction)=>{
    console.log('Hola desde mi middleware');
    next();
    console.log('Adios me voy para no volver')
};
const validarAnno=(req:Request,res:Response,
    next:NextFunction)=>{
    const year=req.params.parametro;
    if(Number(year)<1950){
        res.status(404).send({
            message:"Año inválido"
        })
    }
   
    next();
   
}
const validarAnnoMayor=(req:Request,res:Response,
    next:NextFunction)=>{
    const year=req.params.parametro;
    if(Number(year)<1950){
        res.status(404).send({
            message:"Año inválido menor a 2024"
        })
    }
   
    next();
   
}
export {primerMiddleware, validarAnno,validarAnnoMayor}