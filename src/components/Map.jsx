import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const UpdateMapCenter = ({ latitude, longitude }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude], 5);
  }, [latitude, longitude, map]);
  return null;
};

const Map = ({ latitude, longitude }) => {
  if (!latitude || !longitude) {
    return <p>Loading map...</p>;
  }

  return (
    <div className="map-container">
      <MapContainer
        center={[latitude, longitude]}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]} />
        <UpdateMapCenter latitude={latitude} longitude={longitude} />
      </MapContainer>
    </div>
  );
};

export default Map;
