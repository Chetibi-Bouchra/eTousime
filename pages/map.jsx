import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import styles from '../styles/styles.module.css'; 
import L from "leaflet";

const markerIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});

const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  {
    ssr: false, // Disable server-side rendering
  }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  {
    ssr: false, // Disable server-side rendering
  }
);

const Marker = dynamic(
  () => import("react-leaflet").then((module) => module.Marker),
  {
    ssr: false, // Disable server-side rendering
  }
);

const Popup = dynamic(
  () => import("react-leaflet").then((module) => module.Popup),
  {
    ssr: false, // Disable server-side rendering
  }
);

const ChangeView = dynamic(
  () => import("react-leaflet").then((module) => module.ChangeView),
  {
    ssr: false, // Disable server-side rendering
  }
);

export function Map() {
  const [geoData, setGeoData] = useState([
    { lat: 36.74572853725521, lng: 3.0697966061518356 }, // London
    { lat: 36.74684184057267, lng: 3.0727363072393175 }, // New York
    { lat: 36.74614978905859, lng: 3.072242780779376 },
    // Add more coordinates here...
  ]);

  const center = [geoData[0].lat, geoData[0].lng];

  useEffect(() => {
    // Fetch or update geoData using API calls, user input, etc.
    // Example:
    // const fetchData = async () => {
    //   const response = await fetch('API_ENDPOINT');
    //   const data = await response.json();
    //   setGeoData(data);
    // };
    // fetchData();
  }, []);

  return (
    <MapContainer center={center} zoom={20} style={{ height: "86vh", marginTop: 10 }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.map((coords, index) => (
        <Marker key={index} position={coords} icon={markerIcon}>
          <Popup>
            
            Lat: {coords.lat}<br/>
            Lng: {coords.lng}
          </Popup>
        </Marker>
      ))}
      <ChangeView coords={center} />
    </MapContainer>
  );
}

export default Map;
