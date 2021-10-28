import React from "react";
import CountryInfo from "./CountryInfo";

const CountryResult = ({ filteredCountries }) => {
  return (
    <ul>
      {filteredCountries.length <= 10 && filteredCountries.length > 0 ? (
        filteredCountries.map((country, index) => (
          <li key={index}>
            <span> {country.name.common} </span> 
            <button >Show</button>

            <CountryInfo country={country} />

          </li>
        ))
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </ul>
  );
};

export default CountryResult;
