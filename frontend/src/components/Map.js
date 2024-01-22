import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/Login.css'; // Import your custom CSS for styling

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const customIcon = new Icon({
    iconUrl: 'images/placeholder.png', // Relative path to your custom icon image
    iconSize: [30, 30], // Set the width and height of your icon
    iconAnchor: [12, 41], // Set the anchor point
    popupAnchor: [1, -34], // Set the popup anchor
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function Map() {
  const center = [51.505, -0.09];
 
  const customIcon = new Icon({
    iconUrl: 'images/location1.png', // Relative path to your custom icon image
    iconSize: [30, 30], // Set the width and height of your icon
    iconAnchor: [12, 41], // Set the anchor point
    popupAnchor: [1, -34], // Set the popup anchor
  });

  // Array of gynecologist locations with latitude, longitude, and name
  const gynecologistLocations = [
    {
      lat: 19.056573, lng: 72.889541, name: 'Gynecologist A'
    },
    { lat:19.042864, lng: 72.914827, name: 'Gynecologist B' },
    { lat:19.053555, lng: 72.887009, name: 'Gynecologist C' },
    { lat:19.056553, lng: 72.890400, name: 'Gynecologist D' },
    { lat:19.047496, lng: 72.874586, name: 'Gynecologist E' },
    // { lat:19.046283, lng: 72.842670, name: 'Gynecologist F' },

  
    // Add more locations as needed
  ];

  return (
    <div className='container'>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {gynecologistLocations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]} icon={customIcon}
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;

//Near Pixolo
// {
//   lat: 19.090880, lng: 72.913788, name: 'Gynecologist A'
// },
// { lat:19.093265, lng: 72.912952, name: 'Gynecologist B' },
// { lat:19.090449, lng: 72.907330, name: 'Gynecologist C' },
// { lat:19.093261, lng: 72.913045, name: 'Gynecologist D' },
// { lat:19.095297, lng: 72.913895, name: 'Gynecologist E' },

//Near Home
// {
//   lat: 19.040306, lng: 72.851998, name: 'Gynecologist A'
// },
// { lat:19.039987, lng: 72.854652, name: 'Gynecologist B' },
// { lat:19.040241, lng: 72.851997, name: 'Gynecologist C' },
// { lat:19.040388, lng: 72.854811, name: 'Gynecologist D' },
// { lat:19.043134, lng: 72.856226, name: 'Gynecologist E' },
// { lat:19.046283, lng: 72.842670, name: 'Gynecologist F' },
