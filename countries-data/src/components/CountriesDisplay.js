import React from "react";

const CountriesDisplay = ({ country, handleClick }) => {
  return (
    <div>
      <span style={{ listStyle: "none", margin: 0 }}>{country.name}</span>
      <button
        onClick={() => handleClick(country)}
        style={{
          fontSize: "13px",
          borderRadius: "6px",
          backgroundColor: "white",
          border: "1px solid grey",
        }}
      >
        Show
      </button>
    </div>
  );
};

export default CountriesDisplay;
