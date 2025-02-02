import React from "react";
import "./Weather.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import visible from "../../assets/visibility.png";
import humidity from "../../assets/humidity.png";

const Weather = ({ weatherData, city }) => {
  if (!weatherData) {
    return (
      <div className="weather-container">
        Enter a city to get weather details.
      </div>
    );
  }

  return (
    <div className="weather-container">
      <div className="main-details">
        <h2>Weather</h2>
        <p>Now</p>
        <div className="location">
          <LocationOnIcon className="location-icon" />
          <p>
            {city}, {weatherData.sys.country}
          </p>
        </div>
        <div className="temperature">
          <h1>{Math.round(weatherData.main.temp)}°C</h1>
          <p>Feels like {Math.round(weatherData.main.feels_like)}°C</p>
          <h3>{weatherData.weather[0].main}</h3>
        </div>
      </div>
      <div className="more-details">
        <div className="card">
          <p>Visibility</p>
          <div className="figure">
            <h3>{weatherData.visibility / 1000} km</h3>
            <img src={visible} alt="" />
          </div>
        </div>
        <div className="card">
          <p>Humidity</p>
          <div className="figure">
            <h3>{weatherData.main.humidity}%</h3>
            <img src={humidity} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
