import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarCard.css'
import moment from 'moment/moment';

export default function CalendarCard() {

  return (
    <div className='h-full p-4'> 
      <Calendar 
        selectRange={true}
        formatDay={(locale, date) => moment(date).format("DD")} 
        />
    </div>
  );
}

