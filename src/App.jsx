import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather/Weather";
import Details from "./components/Weather/Details";
import Map from "./components/Map";
import axios from "axios";
import Sun from "./components/Weather/Sun";
import Forecast from "./components/Weather/Forecast";
import loader from "./assets/loader.png";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [current_city, setCurrent_city] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);
  const defaultCity = "Manipal";

  const fetchCoordinates = async (city, apiKey) => {
    if (!city.trim()) return null;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
      );
      console.log(response.data);
      setCurrent_city(response.data[0].name);

      return {
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
      };
    } catch (error) {
      console.error("Error fetching coordinates: ", error);
      alert("City not found. Please try again.");
      return null;
    }
  };

  const fetchWeatherData = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const ninjaApi = import.meta.env.VITE_API_NINJA_API_KEY;
    if (!apiKey || !ninjaApi) {
      alert("API Key is missing! Check your .env file.");
      return;
    }

    setLoading(true);
    const coordinates = await fetchCoordinates(city, apiKey);
    if (!coordinates) {
      setLoading(false);
      return;
    }

    setLatitude(coordinates.latitude);
    setLongitude(coordinates.longitude);

    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&appid=${apiKey}`
      );

      const aqiResponse = await axios.get(
        `https://api.api-ninjas.com/v1/airquality?lat=${coordinates.latitude}&lon=${coordinates.longitude}`,
        { headers: { "X-Api-Key": ninjaApi } }
      );

      const updatedWeatherData = {
        ...weatherResponse.data,
        aqi: aqiResponse.data.overall_aqi,
      };

      setLoading(false);
      setWeatherData(updatedWeatherData);
      console.log(updatedWeatherData);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      alert("Error fetching data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(defaultCity);
  }, []);

  return (
    <>
      <div className={`app-body ${loading ? "loading" : ""}`}>
        <Navbar fetchWeatherData={fetchWeatherData} className="Navbar" />
        <div className="container">
          <div className="weather-info">
            <div className="row">
              <Weather weatherData={weatherData} city={current_city} />
              <Map latitude={latitude} longitude={longitude} />
            </div>
            <div className="row">
              <Details weatherData={weatherData} />
              <Sun weatherData={weatherData} />
            </div>
          </div>
          <div className="future-forecast">
            <Forecast latitude={latitude} longitude={longitude} />
          </div>
        </div>
      </div>
      {loading && (
        <div className="loader-container">
          <img src={loader} alt="Loading..." className="loader" />
        </div>
      )}
    </>
  );
}

export default App;
