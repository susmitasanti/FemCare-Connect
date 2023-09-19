import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CycleCalendar(props) {
  const [selectedDates, setSelectedDates] = useState([]);
  const [dateRanges, setDateRanges] = useState([
    { start: new Date("2023-09-10"), end: new Date("2023-09-15") },
    { start: new Date("2023-09-20"), end: new Date("2023-09-25") },
    { start: new Date("2023-08-30"), end: new Date("2023-09-02") }
  ]);

  const customizeTileContent = (dateRanges, date) => {
    // Check if the current date is within any of the date ranges
    for (const dateRange of dateRanges) {
      const startDate = dateRange.start;
      const endDate = dateRange.end;

      if (date >= startDate && date <= endDate) {
        // Apply a custom CSS class to highlight the date
        return <div className="highlighted-date">{date.getDate()}</div>;
      }
    }

    return null; // Return null for dates that don't need customization
  };

  useEffect(() => {
    // This code will run whenever the dateRanges state changes
    console.log("dateRanges has changed:", dateRanges);

  }, [dateRanges]);

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
      start: new Date(formattedDates[0]),
      end: new Date(formattedDates[1]),
    };
    const updatedDateRanges = dateRanges.concat(newDateRange);

    // Update the dateRanges state with the new array
    setDateRanges(updatedDateRanges);
  };

  return (
    <div>
      <Calendar
        onChange={onDateChange}
        value={selectedDates}
        selectRange={true}
        tileContent={({ date }) => customizeTileContent(dateRanges, date)} // Apply the custom tile content function
      />
    </div>
  );
}

export default CycleCalendar;
