import { Request,Response } from "express";
import { getGames,updateGame,
    deleteGame,insertrGame } from "../services/Juego.service";
import { Juego } from "../models/Juego.interface";
const verJuegos=async(req:Request,res:Response)=>{
    const juegos=await getGames();
    res.status(201).send(juegos);
}
const insertarJuego=async (req:Request,res:Response)=>{
    const datos=req.body;
    const juego=await insertrGame(datos);
    res.status(200).send(juego);
}
const borrarJuego=async (res:Response,req:Request)=>{
    const id=req.params.id;
    const juego=await deleteGame(id);
    return juego;
}
const actualizarJuego=async(req:Request,res:Response)=>{
    const id=req.params.id;
    const datos=req.body;
    const juego=await updateGame(id,datos);
    res.status(201).send(juego);
}
export {verJuegos,insertarJuego,borrarJuego,actualizarJuego}