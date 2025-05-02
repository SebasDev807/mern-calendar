import { CorsOptions } from "cors";
import dotenv from 'dotenv';
dotenv.config();


//Permitir origenes desde postman y el frontend
const clientOrigin = process.env.CLIENT_ORIGIN;

export const corsConfig: CorsOptions = {
    
    origin: function (origin, callback) {
        
        const whiteList = [];

        if (clientOrigin) whiteList.push(clientOrigin);

        // Permitir peticiones sin origen (como desde Postman o el servidor)
        if (!origin) {
            return callback(null, true);
        }

        if (whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Error de CORS'));
        }
    }
}
