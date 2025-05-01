import { useSelector } from "react-redux"
import { RootState } from "../store"
import { useDispatch } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendar-slice";
import { Event } from "../calendar/interfaces/Event";

export const useCalendarStore = () => {


    const { events, activeEvent } = useSelector((state: RootState) => state.calendar);

    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent: Event) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }


    const startSavingEvent = async (calendarEvent: Event) => {
        //TODO: Llegar al backend

        // All right

        if (calendarEvent._id) {
            //Actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }));
        } else {
            //Creando
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
        }
    }

    const startDeletingEvent = async () => {
        //TODO: Llegar al backend
        dispatch(onDeleteEvent());
    }

    return {
        activeEvent,
        setActiveEvent,
        events,
        hasEventSelected: !!activeEvent,
        startSavingEvent,
        startDeletingEvent
    }
}