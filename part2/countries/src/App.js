import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleFilterInput = (event) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.includes(event.target.value)
      )
    );
  };

  return (
    <div className="">
      <div>
        find counties : <input type="text" onChange={handleFilterInput} />
      </div>

      <div>
        {filteredCountries.length <= 10 && filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <div key={index}>
              <h2> {country.name.common} </h2>
              <p>capital {country.capital}</p>
              <p>population {country.population}</p>

            <h3>Languages</h3>
              <ul>
                
                {/* { country.languages.map((lang, v)=> <li key={v}>{lang.name}</li>)} */}
              </ul>


            </div>
          ))
        ) : (
          <p>Too many matches, specify another filter</p>
        )}
      </div>
    </div>
  );
};

export default App;
