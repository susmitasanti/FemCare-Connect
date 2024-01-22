import React from 'react'
import { useState } from 'react';
import CycleCalendar from './CycleCalendar';
import '../css/Tracker.css'



function Tracker() {
    const [cycles, setCycles] = useState([]);

  // Function to add a new cycle to the list
  const addCycle = (cycle) => {
    setCycles([...cycles, cycle]);
  };

  return (
    <div className='background-image'>
      <div className='container'>
     <div
        align='center'
        className='tracker'// Apply the background-image class here
        style={{ margin: '100px' }}
      >
        <h1>Menstrual Cycle Tracker</h1>
        <CycleCalendar addCycle={addCycle} />
      </div>
      </div>
    </div>  )
}

export default Tracker
