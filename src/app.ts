import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import dbConnect from './config/dbConnection';
const PORT=process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
dbConnect().then(()=>console.log('Se conecto a la BD'))
app.listen(PORT,
    ()=>console.log('Corriendo en localhost'+PORT));
