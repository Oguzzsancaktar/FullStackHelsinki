import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [newPersons, setNewPersons] = useState(persons);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleInputChange = (event) => {
    switch (event.target.id) {
      case "nameInput":
        let nameInput = event.target.value;
        setNewName(nameInput);
        break;

      case "phoneInput":
        let phoneInput = event.target.value;
        setNewPhone(phoneInput);
        break;

      case "filterInput":
        setIsFiltering(true);
        if (event.target.value.length === 0) {
          setIsFiltering(false);
        }
        setNewFilter(event.target.value);
        setNewPersons(
          persons.filter((person) => person.name.includes(event.target.value))
        );

        break;

      default:
        break;
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (newName.trim().length === 0) {
      alert(`name is not be emty`);
    } else if (!persons.filter((item) => item.name === newName).length) {
      const newPersonObject = {
        // id: persons.length + 1,
        name: newName,
        number: newPhone,
      };
      // setPersons(persons.concat(newPersonObject));
      axios
        .post("http://localhost:3001/persons", newPersonObject)
        .then((res) => {
         setPersons(persons.concat(res.data))
        });
      setNewName("");
      setNewPhone("");
    } else {
      alert(`${newName} is added before please try another`);
    }
  };

  const removeUser = (id) =>{
    console.log(id);
    setPersons(persons.map((person) => person.id !== id ? person : null))
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter onChange={handleInputChange} newFilter={newFilter} />

      <h2>Add New Contact</h2>
      <PersonForm
        onClick={addPerson}
        onChange={handleInputChange}
        newName={newName}
        newPhone={newPhone}
      />
      <h2>Numbers</h2> 
      <Persons
        isFiltering={isFiltering}
        newPersons={newPersons}
        persons={persons}
        onClick={removeUser}
      />
    </div>
  );
};

export default App;
