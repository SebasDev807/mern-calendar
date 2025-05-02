import { Request, Response } from '../interfaces';
import { EventModel as Event } from '../models/event.model';


const getEvents = async (req: Request, res: Response) => {

    try {

        const events = await Event.find()
            .populate('user', 'name');

        res.json({
            ok: true,
            events
        })


    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: 'Algo salio mal.'
        })
    }

}


const createEvent = async (req: Request, res: Response) => {

    const event = new Event(req.body);


    try {

        event.user = req.uid;

        const savedEvent = await event.save();

        res.status(201).json({
            ok: true,
            event: savedEvent
        });



    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: 'Algo salio mal.'
        })
    }

}


const updateEvent = async (req: Request, res: Response) => {

    const { id } = req.params;
    const uid = req.uid;

    try {

        const event = await Event.findById(id);

        if (!event) {
            res.status(404).json({
                ok: false,
                error: 'No se pudo encontrar el evento'
            });

            return;
        }

        if (event.user !== uid) {
            res.status(403).json({
                ok: false,
                error: 'No tiene permiso para editar este evento.'
            })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updatedEvent = await Event.findByIdAndUpdate(
            id, newEvent, {
            new: true
        });

        res.json({
            ok: true,
            event: updateEvent
        })


    } catch (error) {

        console.error(error)

        res.status(500).json({
            msg: 'Algo salio mal.'
        })
    }

}


const deleteEvent = async (req: Request, res: Response) => {

    const { id } = req.params;
    const uid = req.uid;

    
    try {

        const event = await Event.findById(id);

        if (!event) {

            res.status(404).json({
                ok: false,
                error: 'El evento no existe'
            });

            return;
        }

        if (event.user != uid) {
            res.status(403).json({
                ok: false,
                error: 'No tienes permiso para eliminar este evento'
            })

            return;
        }



    } catch (error) {

        console.error(error)

        res.status(500).json({
            msg: 'Something went wrong'
        })
    }

}


export {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}