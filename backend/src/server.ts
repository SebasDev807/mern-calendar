import express, { Application } from 'express';
import path from 'path';
import { authRouter } from './routes/auth.routes';
import dbConnect from './config/database.config';
const server: Application = express();


/* Database connection */
dbConnect();

/* Middlewares */
server.use(express.json()); //Lectura y parseo del body
server.use(express.static('public')); //Carpeta publica

/* Rutas */
//TODO: auth: crear, login, renew
server.use('/api/v1/auth', authRouter)

export default server;

















// server.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });
