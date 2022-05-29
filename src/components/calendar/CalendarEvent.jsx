/* eslint-disable react/prop-types */
/* eslint-disable spaced-comment */
import React from 'react';
import PropTypes from 'prop-types';

const CalendarEvent = ({ event }) => {
  const { title, user } = event;
  const { name } = user;

  return (
    <div>
      <span>{title}</span>
      <span> - {name}</span>
    </div>
  );
};

export default CalendarEvent;

CalendarEvent.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};

CalendarEvent.defaultProps = {
  event: PropTypes.shape({
    title: 'ejemplo',
    user: PropTypes.shape({
      _id: '123',
      name: 'fernando',
    }),
  }),
};
