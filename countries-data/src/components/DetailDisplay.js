import React from "react";
import WeatherDisplay from './WeatherDisplay'

const Language = ({ language }) => <li>{language.name}</li>;

const DetailDisplay = ({ country, weather }) => {
  return (
    <div>
      <p style={{ fontSize: "25px", fontWeight: "bold" }}>{country.name}</p>
      <p style={{ margin: 0 }}>capital {country.capital}</p>
      <p style={{ margin: 0 }}>population {country.population}</p>
      <p style={{fontSize: "20px",fontWeight: "bold"}}>spoken languages</p>
      <ul>
        {country.languages.map((language) => (
          <Language key={language.name} language={language} />
        ))}
      </ul>
      <img
        src={country.flag}
        style={{ width: "150px", height: "150px" }}
        alt={`flag of ${country.name}`}
      />
      <WeatherDisplay weather={weather} capital={country.capital}/>
    </div>
  );
};

export default DetailDisplay;
