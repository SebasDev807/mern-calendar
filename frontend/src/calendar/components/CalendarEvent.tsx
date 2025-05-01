import { Event } from "../interfaces/Event"

interface CalendarEventProps {
    event: Event
}



export const CalendarEvent = ({ event }: CalendarEventProps) => {

    const { title, user } = event;

    return (
        <>
            <strong >{title}</strong>
            <strong>- {user?.name}</strong>
        </>
    )
}
