import React, { useState, useEffect } from 'react'
import Phonebook from "./components/Phonebook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => setPersons(response.data))
  }, [])

  const addPerson = (e) => {
    e.preventDefault();

    persons.some((person) => person.name === newName)
      ? alert(`${newName} is alerady added to phonebook`)
      : setPersons(
          persons.concat({ name: newName, number: newNumber, id: newName })
        );

    setNewName("");
    setNewNumber("");
  };

  const addNewName = (e) => {
    setNewName(e.target.value);
  };

  const addNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        persons={persons}
        filterName={filterName}
        handleFilterChange={handleFilterChange}
      />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        addNewName={addNewName}
        newNumber={newNumber}
        addNewNumber={addNewNumber}
      />

      <h3>Numbers</h3>

      <Phonebook persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;