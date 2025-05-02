import { body, param, query } from 'express-validator';
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/events.controller';
import { Router } from 'express';
import { validateFields } from '../middlewares/validate-fields';
import { validateJwt } from '../middlewares/validate-jwt';
import { isDate } from '../utils';

export const eventsRouter: Router = Router();


//Todas las rutas deben pasar por la validacion del JWT
eventsRouter.use(validateJwt);

//Obtener eventos
eventsRouter.get('/', getEvents);

//Crear evento
eventsRouter.post('/', [
    body('title')
        .notEmpty()
        .withMessage('El titulo es Obligatorio'),

    body('start')
        .custom(isDate).
        withMessage('Fecha de inicio requerida'),

    body('end')
        .custom(isDate).
        withMessage('Fecha de finalización requerida'),
    validateFields
], createEvent);


//Actualizar evento
eventsRouter.put('/:id', [

    param('id')
        .isMongoId()
        .withMessage('Id invalido'),

    body('title')
        .notEmpty()
        .withMessage('El titulo es Obligatorio'),

    body('start')
        .custom(isDate).
        withMessage('Fecha de inicio requerida'),

    body('end')
        .custom(isDate).
        withMessage('Fecha de finalización requerida'),

    validateFields

], updateEvent);

// Borrar evento
eventsRouter.delete('/', [

    param('id')
        .isMongoId()
        .withMessage('Id invalido'),
    validateFields
], deleteEvent);