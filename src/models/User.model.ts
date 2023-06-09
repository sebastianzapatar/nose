import {model,Schema} from 'mongoose';
import { User } from './User.interface';

const UserScheme =new Schema<User>({
    name:{
        type:String,
        required:true,
        unique:true,
        minlength:8
    },
    password:{
        type:String,
        required:true,
        minlength:10
    },
    rol:{
        type:String,
        default:'esclavo',
        minlength:5
    }
})
const UserModel=model('users',UserScheme);
export default UserModel;
