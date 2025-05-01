import jwt, { JwtPayload } from 'jsonwebtoken';

export const generateJwt = (payload: JwtPayload) => {

    const SECRET = process.env.JWT_SECRET;

    if (!SECRET) throw new Error('No secret provided');

    const token = jwt.sign(payload, SECRET, {
        expiresIn: '1d'
    });

    return token;
}