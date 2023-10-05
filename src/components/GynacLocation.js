// import React, { useEffect } from 'react';

// function GynacLocation() {
//   useEffect(() => {
//     // Define the initMap function that will be called when the API is loaded
//     const initMap = () => {
//       // Create a map centered on a specific location (e.g., New York City)
//       const map = new window.google.maps.Map(document.getElementById('map'), {
//         center: { lat: 40.7128, lng: -74.0060 },
//         zoom: 10,
//       });

//       // Create a marker on the map (optional)
//       const marker = new window.google.maps.Marker({
//         position: { lat: 40.7128, lng: -74.0060 },
//         map: map,
//         title: 'Marker Title',
//       });
//     };

//     // Load the Google Maps API script with the callback
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCVJL1AQcR6Of_4bkE093L2MNjWOjMeFdA&libraries=places&callback=initMap`;
//     script.async = true;
//     document.head.appendChild(script);

//     // Clean up the script tag when the component unmounts
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
// }

// export default GynacLocation;
