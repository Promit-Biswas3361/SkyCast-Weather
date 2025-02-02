import React from "react";
import sunrise from "../../assets/sunrise.png";
import sunset from "../../assets/sunset.png";
import "./Sun.css";

const getTime = (unixTime, offset) => {
  const date = new Date((unixTime + offset) * 1000);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
};

const Sun = ({ weatherData }) => {
  if (!weatherData) return;

  return (
    <div className="main-container">
      <div className="card">
        <img src={sunrise} alt="Sunrise" />
        <p>Sunrise</p>
        <h2>{getTime(weatherData.sys.sunrise, weatherData.timezone)}</h2>
      </div>
      <div className="card">
        <img src={sunset} alt="Sunset" />
        <p>Sunset</p>
        <h2>{getTime(weatherData.sys.sunset, weatherData.timezone)}</h2>
      </div>
    </div>
  );
};

export default Sun;
