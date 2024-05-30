import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIconUrl from "../css/location.png";
import hospitalIconUrl from "../css/hospiloc.png";
import Classes from "../css/map.css";

const API_URL = "http://localhost:5000/api/HospMap/search";

function LocationMarker({ lat, lon }) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    if (lat && lon) {
      setPosition([lat, lon]);
      map.flyTo([lat, lon], map.getZoom());
    }
  }, [lat, lon, map]);

  const customIcon = new Icon({
    iconUrl: locationIconUrl,
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function HospMap() {
  const [locations, setLocations] = useState([]);
  const [locationInput, setLocationInput] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.error("Error fetching current location:", error);
        }
      );
    }
  }, []);

  const search = async () => {
    try {
      if (locationInput === "") return;

      setLoading(true);

      // Fetch coordinates from a location input
      const geocodeResponse = await fetch(`https://nominatim.openstreetmap.org/search?q=${locationInput}&format=json`);
      const geocodeData = await geocodeResponse.json();
      if (geocodeData.length === 0) throw new Error("No location found");

      const { lat, lon } = geocodeData[0];
      setLat(lat);
      setLon(lon);

      // Fetch nearby hospitals
      const response = await fetch(`${API_URL}?lat=${lat}&lng=${lon}&category=hospitals`);
      if (!response.ok) throw new Error("Network response was not ok");

      const locationData = await response.json();
      setLocations(locationData);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const hospitalIcon = new Icon({
    iconUrl: hospitalIconUrl,
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <section className={Classes.location}>
      <div className={Classes.container}>
        <h2 style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
          Find Nearby Hospitals
        </h2>

        <div className="searchBox">
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Enter location"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            />
            <button onClick={search} style={{ color: "white", backgroundColor: " #144c52" }}>
              Search
            </button>
          </div>
        </div>

        {loading && (
          <div className={Classes.loadingMessage}>
            It might take a few seconds to find nearby hospitals...
          </div>
        )}

        <MapContainer
          center={[lat || 0, lon || 0]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "500px", width: "100%" }}
          className={Classes.leafletcontainer}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={[location.lat, location.lng]}
              icon={hospitalIcon}
            >
              <Popup>
                <div>
                  <h3>{location.name}</h3>
                  <p>Address: {location.address}</p>
                  <p>Rating: {location.rating}</p>
                  <p>Phone: {location.phone}</p>
                  <p>Website: {location.website}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <LocationMarker lat={lat} lon={lon} />
        </MapContainer>
      </div>
    </section>
  );
}

export default HospMap;
