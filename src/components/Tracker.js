import React from 'react'
import { useState } from 'react';
import CycleCalendar from './CycleCalendar';


function Tracker() {
    const [cycles, setCycles] = useState([]);

  // Function to add a new cycle to the list
  const addCycle = (cycle) => {
    setCycles([...cycles, cycle]);
  };
  return (
    <>
    <h1>Menstrual Cycle Tracker</h1>
      <CycleCalendar addCycle={addCycle} /> 
    </>
  )
}

export default Tracker
