import React, {useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CycleCalendar(props) {
  const [selectedDates, setSelectedDates] = useState([]);
  const [dateRanges, setDateRanges] = useState([]);
    // { startDate: "2023-09-10", endDate: "2023-09-15" },
    // { startDate: "2023-09-20", endDate: "2023-09-25" },
    // { startDate: "2023-08-30", endDate: "2023-09-02" }
  

  const getCycles = async () => {
    const url = "http://localhost:3001/api/fetchallCycles"
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
    });
    const json = await response.json();
    setDateRanges(json);
    console.log(json)
}

  const addCycle = async (start, end) => {
    const url = `http://localhost:3001/api/addCycle`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ startDate: start, endDate: end })
    });
    const cycle = await response.json();
   const newDateRange = {
        startDate:start,
        endDate: end,
      };
    const updatedDateRanges = dateRanges.concat(newDateRange);
    // setDateRanges(dateRanges.concat(cycle))
    setDateRanges(updatedDateRanges)
    console.log("Adding a new Cycle:", cycle)
}

useEffect(() => {
  if(localStorage.getItem('token')){
      getCycles()
  }
  else{
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


