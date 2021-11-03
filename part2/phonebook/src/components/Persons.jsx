import React from "react";

const Persons = ({ isFiltering, newPersons, persons, onClick }) => {
  return (
    <ul>
      {isFiltering
        ? newPersons.map((person, index) => (
            <li key={index}>
              {" "}
              {person.name} {person.number}{" "}
              <button onClick={() => onClick(person.id)}> remove </button>
            </li>
          ))
        : persons.map((person, index) => (
            <li key={index}>
              {" "}
              {person.name} {person.number}{" "}
              <button onClick={() => onClick(person.id)}> remove </button>
            </li>
          ))}
    </ul>
  );
};

export default Persons;
