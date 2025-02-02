import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import search from "../assets/search_icon.png";

const Navbar = ({ fetchWeatherData }) => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSearch = () => {
    fetchWeatherData(item);
    setItem("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="navbar">
      <div className="app_details">
        <img src={logo} alt="Logo" />
        <h1>SkyCast</h1>
      </div>
      <div className="search_bar">
        <img src={search} alt="Search" onClick={handleSearch} />
        <input
          type="text"
          value={item}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          placeholder="Enter a city..."
        />
      </div>
    </div>
  );
};

export default Navbar;
