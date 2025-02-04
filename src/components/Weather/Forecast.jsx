import React, { useEffect, useState } from "react";
import "./Forecast.css";
import axios from "axios";

const Forecast = ({ latitude, longitude }) => {
  const [forecast, setForecast] = useState(null);

  const getForecast = async (latitude, longitude) => {
    const apiKey = import.meta.env.VITE_TOMORROW_IO_API_KEY;
    if (!apiKey) {
      alert("API Key is missing!");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature,weatherCode&timesteps=1d&apikey=${apiKey}`
      );

      setForecast(response.data.data.timelines[0].intervals);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      alert("Error fetching forecast data.");
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      getForecast(latitude, longitude);
    }
  }, [latitude, longitude]);

  if (!forecast) return;

  return (
    <div className="outer-container">
      <h2>6-Day Forecast</h2>
      <ul>
        {forecast.map((day, index) => (
          <li key={index}>
            <div className="daily-forecast">
              <p>
                {new Date(day.startTime).toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                })}
              </p>
              <p>
                <b>{day.values.temperature}°C</b>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
