import { Calendar, View } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Navbar } from "../components/Navbar";
import { localizer } from '../../helpers/calendarLocalizer';
import { getMessages } from '../../helpers';
import { CalendarEvent } from '../components/CalendarEvent';
import { Event } from '../interfaces/Event';
import { useState } from 'react';
import { CalendarModal } from '../components/CalendarModal';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { FabAddNew } from '../components/FabAddNew';
import { FabDelete } from '../components/FabDelete';


export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') as View) || 'week';





  const eventStyleGetter = (
    // event: Event,
    // start: Date,
    // end: Date,
    // isSelected: boolean
  ) => {
    const style: React.CSSProperties = {
      background: '#347CF7',
      borderRadius: '0px',
      opacity: '0.8',
      color: 'white'
    }

    return { style }
  }

  const { events, setActiveEvent, activeEvent } = useCalendarStore();
  const { openDateModal } = useUiStore()

  const onDoubleClick = () => {
    openDateModal();
  }

  const onSelect = (event: Event) => {
    setActiveEvent(event);
  }

  const onViewChange = (event: View) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  }


  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}

        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px' }}
        messages={getMessages()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      <CalendarModal />
      <FabAddNew />


      <FabDelete />
    </>
  );
};
