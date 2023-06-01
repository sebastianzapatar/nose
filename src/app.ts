import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';

const PORT=process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(router);
app.listen(PORT,
    ()=>console.log('Corriendo en localhost'+PORT));
