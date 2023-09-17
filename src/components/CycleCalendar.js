// CycleCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CycleCalendar(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Handle date selection
  const handleDateChange = (newDate) => {
    if (startDate === null) {
      // First click sets the start date
      setStartDate(newDate);
    } else {
      // Second click sets the end date and calculates duration
      setEndDate(newDate);

      // Calculate duration (in days)
      const durationInMilliseconds = newDate - startDate;
      const durationInDays = Math.ceil(durationInMilliseconds / (1000 * 60 * 60 * 24));

      // Create a cycle object with start date, end date, and duration
      const cycle = { startDate, endDate: newDate, duration: durationInDays };

      // Log the cycle information to the console
      console.log("Menstrual Cycle:", cycle);

      // Call the addCycle function with start date and duration
      props.addCycle(cycle);

      // Reset the selection
      setStartDate(null);
      setEndDate(null);
    }
  };

  // Function to highlight the selected date range
  const tileContent = ({ date, view }) => {
    if (startDate && endDate && view === 'month' && date >= startDate && date <= endDate) {
      return <div className="selected-date-range">{date.getDate()}</div>;
    }
  };

  return (
    <div>
      <h2>Menstrual Cycle Calendar</h2>
      <Calendar onChange={handleDateChange} value={startDate || endDate} tileContent={tileContent} />
    </div>
  );
}

export default CycleCalendar;
