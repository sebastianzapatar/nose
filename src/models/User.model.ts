import {model,Schema} from 'mongoose';
import { User } from './User.interface';

const UserScheme =new Schema<User>({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        default:'esclavo'
    }
})
const UserModel=model('users',UserScheme);
export default UserModel;
