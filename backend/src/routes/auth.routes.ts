import { Router } from 'express';
import { login, register, renew } from '../controllers/auth.controller';
import { body } from 'express-validator';
import { validateFields } from '../middlewares/validate-fields';

export const authRouter: Router = Router();

authRouter.post('/register', [

    body('email')
        .isEmail()
        .withMessage('Email es requerido'),

    body('name')
        .notEmpty()
        .withMessage('Nombre es requerido'),

    body('password')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        .withMessage('La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.'),

    validateFields
], register);




authRouter.post('/login', [

    body('email')
        .isEmail()
        .withMessage('Email es requerido'),

    body('password')
        .notEmpty()
        .withMessage('La contraseña es requerida'),
    validateFields
], login);

authRouter.get('/renew', renew)