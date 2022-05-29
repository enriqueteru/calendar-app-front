/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import cms from 'helpers/calendar-messages-custom';
import Navbar from '../ui/Navbar';
import CalendarEvent from './CalendarEvent';
import 'react-big-calendar/lib/sass/styles.scss';
import CalendarModal from './CalendarModal';

moment.locale('es');
const localizer = momentLocalizer(moment);
const event = [
  {
    title: 'bd',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    user: {
      _id: '123',
      name: 'Enrique',
    },
  },
];
const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView' || 'day')
  );
  const onDobleClick = (e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  };
  const onSelecteEvent = (e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  };
  const onChangeEvent = (e) => {
    // eslint-disable-next-line no-undef
    setLastView(e);
    localStorage.setItem('lastView', e);
  };
  const eventStyleGetter = () => {
    const style = {
      backgroundColor: 'blue',
      color: 'white',
      borderRadius: '0px',
      display: 'block',
    };
    return { style };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        messages={cms}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onSelecteEvent}
        onView={onChangeEvent}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
