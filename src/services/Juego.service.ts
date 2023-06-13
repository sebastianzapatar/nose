import { Juego } from "../models/Juego.interface";
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
const updateGame=async(_id:string,data:Juego)=>{
    const actualizado=await Game.updateOne({_id:_id},data);
    return actualizado;
}
const deleteGame=async(_id:string)=>{
    const borrado=await Game.deleteOne({_id:_id});
    return borrado;
}
export {getGames,insertrGame,updateGame,deleteGame}