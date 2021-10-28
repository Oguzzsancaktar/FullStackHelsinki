import React, { useState } from "react";

const CountryInfo = ({ country }) => {
  const [shown, setShown] = useState(false);
  return (
    <div>
      <button onClick={()=>setShown(!shown)}> Toggle</button>
      {!shown ? null : (
        <div>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h3>Languages</h3>
          <ul>
            {Object.values(country.languages).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={country.name.common + " flag"} />
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
