import { Juego } from "../models/Juego.interfaces";
import Game from "../models/Juego.model";
const getGames=async()=>{
    const games=await Game.find({});
    return games;
}
const insertrGame=async(game:Juego)=>{
    const nuevoJuego=await Game.create(game);
    console.log(nuevoJuego);
    
    return nuevoJuego;
}
export {getGames,insertrGame}