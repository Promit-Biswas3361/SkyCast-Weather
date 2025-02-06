# 🌤 Weather App

## 📌 Overview

This is a **modern weather application** that provides real-time weather information, air quality index (AQI), and sunrise/sunset times based on the location searched. The app integrates **OpenWeatherMap API** for weather data and **API Ninjas** for air quality information. The map dynamically updates based on the searched location.

## 🚀 Features

- 🔍 **Search for Any City** and get detailed weather info
- 💨 **Air Quality Index (AQI)** displayed for each location
- 🗺 **Interactive Map** with real-time marker updates
- 🌅 **Sunrise & Sunset Times** with icons
- 📊 **6-day Forecast** for future weather predictions

## 🛠 Tech Stack

- **Frontend:** React.js, Leaflet (for maps), Axios (for API calls)
- **APIs Used:**
  - OpenWeatherMap (Weather & Geolocation Data)
  - API Ninjas (Air Quality Index)
- **Styling:** CSS

## 📦 Installation

### Clone the Repository

```sh
git clone https://github.com/Promit-Biswas3361/SkyCast-Weather.git
cd SkyCast-Weather
```

### Install Dependencies

```sh
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add:

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
VITE_API_NINJA_API_KEY=your_api_ninjas_key
```

### Run the App

```sh
npm run dev
```

The app will run on **http://localhost:5173/** (default Vite port).

## 📝 Usage

1. **Search for a city** using the search bar
2. **View real-time weather, AQI, and map updates**
3. **Check the 6-day forecast** for future predictions
4. **See sunrise & sunset times** visually

## 🛠 Future Improvements

- 🌡 Add hourly weather forecast
- 🌍 Get Weather based on user's current location (Uses Geolocation API)
- 🌐 Responsive Design (Mobile-friendly UI)

## 🏆 Credits

Developed by **Promit Biswas**
