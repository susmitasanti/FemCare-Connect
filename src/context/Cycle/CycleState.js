import React from 'react'
import CycleContext from './CycleContext'
import { useState } from 'react';

function CycleState(props) {
    const [selectedDates, setSelectedDates] = useState([]);
  const [dateRanges, setDateRanges] = useState([]);

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
  return (
    <CycleContext.Provider value={{getCycles, addCycle, selectedDates, setSelectedDates, dateRanges, setDateRanges }}>
        {props.children}
    </CycleContext.Provider>
  )
}

export default CycleState
