import React from "react";

const WeatherDisplay = ({ weather, capital }) => {
  return (
    <>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Weather in {capital}
      </p>
      <p style={{ fontWeight: "bold" }}>
        temperature:
        <span style={{ fontWeight: "normal" }}>
          {" "}
          {weather.temperature} Celcius
        </span>
      </p>
      <p style={{ fontWeight: "bold" }}>
        wind:
        <span style={{ fontWeight: "normal" }}>
          {" "}
          {weather.wind_speed} mph direction {weather.wind_dir}
        </span>
      </p>
    </>
  );
};

export default WeatherDisplay;
