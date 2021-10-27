import React from "react";

const Persons = ({ isFiltering , newPersons , persons }) => {
  return (
    <ul>
    {isFiltering
      ? newPersons.map((person, index) => (
          <li key={index}>
            {" "}
            {person.name} {person.number}{" "}
          </li>
        ))
      : persons.map((person, index) => (
          <li key={index}>
            {" "}
            {person.name} {person.number}{" "}
          </li>
        ))}
  </ul>
  );
};

export default Persons;
