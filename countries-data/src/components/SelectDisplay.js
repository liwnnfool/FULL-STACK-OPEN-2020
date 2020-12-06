import React from "react";
import CountriesDisplay from "./CountriesDisplay";
import DetailDisplay from "./DetailDisplay";

const SelectDisplay = ({ countries, handleClick, weather }) => {
  if (countries.length > 10)
    return <p>too many matchs, specify another filter</p>;
  else if (countries.length <= 10 && countries.length > 1) {
    return (
      <>
        {countries.map((country) => (
          <CountriesDisplay
            country={country}
            handleClick={handleClick}
            key={country.name}
          />
        ))}
      </>
    );
  } else if (countries.length === 1) {
    return (
      <>
        <DetailDisplay country={countries[0]} weather={weather} />
      </>
    );
  }

  return <div></div>;
};

export default SelectDisplay;
