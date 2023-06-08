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
export {registrarUsuario};