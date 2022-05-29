import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import cms from 'helpers/calendar-messages-custom';
import Navbar from '../ui/Navbar';
import 'react-big-calendar/lib/sass/styles.scss';

moment.locale('es');
const localizer = momentLocalizer(moment);
const event = [
  {
    title: 'bd',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
  },
];
const CalendarScreen = () => {
  const eventStyleGetter = () => {
    const style = {
      backgroundColor: 'blue',
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
      />
    </div>
  );
};

export default CalendarScreen;
