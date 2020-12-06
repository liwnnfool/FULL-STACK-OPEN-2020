import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import SelectDisplay from "./components/SelectDisplay";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      if (query !== "") {
        const queryCountries = response.data.filter((country) =>
          country.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
        setCountries(queryCountries);
      }
    });
  }, [query]);

  useEffect(() => {
    if (countries.length === 1) {
      const url = "http://api.weatherstack.com/current";
      const accessKey = "process.env.REACT_APP_API_KEY";
      const capital = countries[0].capital;
      axios
        .get(`${url}?access_key=${accessKey}&query=${capital}`)
        .then((response) => {
          setWeather(response.data.current);
          console.log(response)
        });
    }
  }, [countries]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (country) => {
    setQuery(country.name);
  };
  return (
    <div>
      <Filter query={query} handleQueryChange={handleQueryChange} />
      <SelectDisplay countries={countries} handleClick={handleClick} weather={weather} />
    </div>
  );
};

export default App;
