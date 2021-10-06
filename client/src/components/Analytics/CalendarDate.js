import Clock from 'react-clock';
import Calendar from 'react-calendar';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

// import { VCalendar } from 'v-calendar'; // this is a Vue package

// Use `onChange` prop for getting new values.
// reference on states: https://reactpatterns.com/#state-hoisting

import React, { Component } from 'react';
import { render } from 'react-dom';

function CalendarDate() {
  return (
    <div>
      <div>
        <Calendar />
      </div>
    </div>
  );
}

export default CalendarDate;
