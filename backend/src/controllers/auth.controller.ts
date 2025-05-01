import { Response } from "express"
import { Request } from "../interfaces";
import { UserModel as User } from "../models/user.model";
import { compareSync } from "bcryptjs";
import { generateJwt } from "../utils";

const register = async (req: Request, res: Response) => {

    const { name, email } = req.body;

    try {

        const error = new Error();

        const existUser = await User.findOne({
            $or: [{ email }, { name }]
        });

        console.log({ existUser });

        if (existUser) {
            error.message = `Ya existe el usuario.`

            res.status(409).json({
                error: error.message
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

    const error = new Error();

    try {

        const user = await User.findOne({ email });

        if (!user) {

            error.message = `No se encontro el usuario`

            res.status(404).json({
                error: error.message
            });

            return;
        }

        if (!compareSync(password, user.password)) {

            res.status(401).json({
                error: 'Contraseña incorrecta'
            });

            return;
        }

        const token = generateJwt({ uid: user._id });

        res.json({
            user,
            token
        })

    } catch (error) {
        res.status(500).json({
            error: `[login] ${error}`
        })
    }
}

const renew = (req: Request, res: Response) => {

    res.json({
        ok: true,
        msg: 'login'
    })
}



export {
    register,
    login,
    renew

}