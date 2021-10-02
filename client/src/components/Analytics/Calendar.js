// import Clock from 'react-clock';
import { VCalendar } from 'v-calendar'; // this is a Vue package

// Use `onChange` prop for getting new values.
// reference on states: https://reactpatterns.com/#state-hoisting

import React from 'react';

function Calendar() {
  return (
    <div>
      {/* <Clock /> */}
      <VCalendar />
      {/* lmao */}
    </div>
  );
}

export default Calendar;
