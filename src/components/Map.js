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
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
 
  const customIcon = new Icon({
    iconUrl: 'images/location1.png', // Relative path to your custom icon image
    iconSize: [30, 30], // Set the width and height of your icon
    iconAnchor: [12, 41], // Set the anchor point
    popupAnchor: [1, -34], // Set the popup anchor
  });

  // Array of gynecologist locations with latitude, longitude, and name
  const gynecologistLocations = [
    {
      lat: 19.053554, lng: 72.887018, name: 'Gynecologist A'
    },
    { lat:19.055883, lng: 72.896790, name: 'Gynecologist B' },
    { lat:19.042566, lng: 72.914825, name: 'Gynecologist C' },
    { lat:19.056552, lng: 72.889532, name: 'Gynecologist D' },
    { lat:19.042566, lng: 72.914825, name: 'Gynecologist E' },
    { lat:19.056566, lng: 72.890581, name: 'Gynecologist F' },
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
