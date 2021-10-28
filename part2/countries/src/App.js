import axios from "axios";
import { useEffect, useState } from "react";
import CountryResult from "./components/CountryResult";

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
        country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  const api_key = process.env.WHEATHER_APP_API_KEY

  return (
    <div className="">
      <div>
        find counties : <input type="text" onChange={handleFilterInput} />
      </div>

        <CountryResult
          filteredCountries={filteredCountries}
        />
    </div>
  );
};

export default App;
