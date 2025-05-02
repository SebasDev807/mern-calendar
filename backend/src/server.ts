import express, { Application } from 'express';
import dbConnect from './config/database.config';
import { eventsRouter, authRouter } from './routes';
import cors from 'cors'
import { corsConfig } from './config/cors.config';

const server: Application = express();


/* Database connection */
dbConnect();

/* Middlewares */
server.use(express.json()); //Lectura y parseo del body
server.use(express.static('public')); //Carpeta publica
server.use(cors(corsConfig))//cors

/* Rutas */
//TODO: auth: crear, login, renew
server.use('/api/v1/auth', authRouter);
server.use('/api/v1/events', eventsRouter);

export default server;

















// server.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });
