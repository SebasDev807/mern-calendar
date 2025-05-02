import { Request, Response } from "../interfaces";
import { UserModel as User } from "../models/user.model";
import { compareSync } from "bcryptjs";
import { generateJwt } from "../utils";

const register = async (req: Request, res: Response) => {

    const { name, email } = req.body;

    try {


        const existUser = await User.findOne({
            $or: [{ email }, { name }]
        });

        if (existUser) {

            res.status(409).json({
                error: `Ya existe el usuario.`
            })

            return;
        }

        const user = new User(req.body);
        await user.save();

        res.status(201).json({
            user
        })

    } catch (error) {

        console.error(`[register]: ${error}`);

        res.status(500).json({
            error: 'Algo salio mal.'
        });
    }

}


const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user) {


            res.status(404).json({
                error: `No se encontro el usuario`
            });

            return;
        }

        if (!compareSync(password, user.password)) {

            res.status(401).json({
                error: 'Contraseña incorrecta'
            });

            return;
        }

        //Generar JWT
        const token = generateJwt({ uid: user.id, name: user.name });

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        res.status(500).json({
            error: `[login] ${error}`
        })
    }
}

const revalidateToken = (req: Request, res: Response) => {

    const { uid, name } = req;

    try {

        const token = generateJwt({ uid, name });

        res.json({
            ok: true,
            uid, name,
            token
        });

    } catch (error) {
        console.error(`[revalidateToken] ${error}`);
        res.status(500).json({
            error: `Algo salio mal`
        })

    }
}



export {
    register,
    login,
    revalidateToken

}