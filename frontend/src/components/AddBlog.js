import React from 'react'
import Notes from './Notes'
import { useEffect } from 'react';
import ReactGA from 'react-ga';

function AddBlog() {

  useEffect(() => {
    ReactGA.initialize('G-PMZ0QJLDPD');
    // To record a page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <Notes />
    </div>
  )
}

export default AddBlog
