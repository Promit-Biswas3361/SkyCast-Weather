import React from "react";
import "./Detail.css";
import wind from "../../assets/windy.png";
import pressure from "../../assets/speedometer.png";
import aqi from "../../assets/image.png";

const Details = ({ weatherData }) => {
  if (!weatherData) {
    return;
  }

  return (
    <div className="details-container">
      <h2>Details</h2>
      <div className="sub-details">
        <div className="card">
          <p>Wind Speed</p>
          <div className="figure">
            <h3>{Math.round(weatherData.wind.speed * 3.6)} kph</h3>
            <img src={wind} alt="Wind speed" />
          </div>
        </div>
        <div className="card">
          <p>Pressure</p>
          <div className="figure">
            <h3>{weatherData.main.pressure} hPa</h3>
            <img src={pressure} alt="Atmospheric pressure" />
          </div>
        </div>
        <div className="card">
          <p>AQI</p>
          <div className="figure">
            <h3>{weatherData.aqi}</h3>
            <img src={aqi} alt="AQI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
