import React, { useEffect, useState, useContext } from 'react';
import Calendar from 'react-calendar';
import CycleContext from '../context/Cycle/CycleContext';
import 'react-calendar/dist/Calendar.css';

function CycleCalendar(props) {
  const context = useContext(CycleContext)
  const { getCycles, addCycle, selectedDates, setSelectedDates, dateRanges, setDateRanges } = context

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getCycles()
    }
    else {
      // navigate('/login')
    }
  }, [])

  const onDateChange = (newDates) => {
    const formattedDates = newDates.map((date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    });

    setSelectedDates(newDates);

    // Concatenate the newly selected date range to the existing dateRanges
    const newDateRange = {
      startDate: new Date(formattedDates[0]),
      endDate: new Date(formattedDates[1]),
    };
    const updatedDateRanges = dateRanges.concat(newDateRange);

    addCycle(formattedDates[0], formattedDates[1])

    // Update the dateRanges state with the new array
    setDateRanges(updatedDateRanges);
    console.log(dateRanges)
    console.log(updatedDateRanges);
  };

  // Define a function to customize the tile content
  const tileContent = ({ date }) => {
    // Check if the current date is within any of the date ranges
    for (const dateRange of dateRanges) {
      const startDate = new Date(dateRange.startDate);
      const endDate = new Date(dateRange.endDate);

      if (date >= startDate && date <= endDate) {
        // Apply a custom CSS class to highlight the date
        return <div className="highlighted-date">{date.getDate()}</div>;
      }
    }

    return null; // Return null for dates that don't need customization
  };

  return (
    <div>
      <Calendar
        onChange={onDateChange}
        value={selectedDates}
        selectRange={true}
        tileContent={tileContent} // Apply the custom tile content function
      />
    </div>
  );
}

export default CycleCalendar;


