import { User } from "../models/User.interface";
import UserModel from "../models/User.model";
import { encrypt,verify } from "../utils/bcript.handle";
const registrarUsuario=async(user:User)=>{
    const {name,password,rol}=user;
    const userExist=await UserModel.findOne({name:name});
    if(userExist){
        return "Usario ya existe :("
    }
    const passwordHash=await encrypt(password);
    const newUser=await UserModel.create
    ({name,password:passwordHash,rol});
    return newUser;
}
const loginUsuario=async(user:User)=>{
    const {name,password}=user;
    const userExist=await UserModel.findOne({name:name});
    if(!userExist){
        return 'User not exist';
    }
    const passwordHash=userExist.password;
    const isMatch=await verify(password,passwordHash);
    if(isMatch) return userExist;
    else return 'Usuario o password incorrectos';
}
export {registrarUsuario,loginUsuario};