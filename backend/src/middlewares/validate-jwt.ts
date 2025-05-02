import { NextFunction } from "express";
import { Request, Response } from "../interfaces";
import jwt, { JwtPayload } from 'jsonwebtoken';


export const validateJwt = (
    req: Request,
    res: Response,
    next: NextFunction
) => {


    const token = req.header('x-token');


    if (!token) {
        res.status(403).json({
            ok: false,
            error: 'No esta autorizado para acceder a este recurso'
        });

        return;
    }

    try {

        const { name, uid } = jwt.verify(
            token,
            process.env.JWT_SECRET
        ) as JwtPayload;

        req.name = name;
        req.uid = uid;
        
    } catch (error) {

        res.status(401).json({
            ok: false,
            error: 'Token invalido.'
        });

        return

    }

    next();
}