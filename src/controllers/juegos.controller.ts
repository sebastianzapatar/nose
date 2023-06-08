import { Request,Response } from "express";
import { getGames,insertrGame } from "../services/juego.service";
const insertarJuego=async(req:Request, res:Response)=>{
    const juego=req.body;
    const nuevo=await insertrGame(juego);
    res.status(200).send(nuevo);
}

export {insertarJuego}