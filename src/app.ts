import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { router } from './routes';
import { options } from './utils/swagger.utils';
import dbConnect from './config/dbConnection';
const PORT=process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
console.log("Prueba");

const specs = swaggerJsDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
dbConnect().then(()=>console.log('Se conecto a la BD'))
.catch(()=>console.log("No se pudo conectar"))
app.listen(PORT,
    ()=>console.log('Corriendo en localhost'+PORT));
