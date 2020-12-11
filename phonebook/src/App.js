import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebook from "./services/phonebook"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const showError = (errorMessage) => {
    alert(errorMessage);
  };

  const checkInput = () => {
    if (!newName) {
      showError(`name can't be empty`);
      return false;
    }
    if (!newNumber) {
      showError(`number can't be empty`);
      return false;
    }
    if (
      persons.find(
        (person) => person.name === newName && person.number === newNumber
      )
    ) {
      showError(`${newName} with ${newNumber} has alerady in the phonebook`);
      return false;
    }

    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!checkInput()) {
      return;
    }

    const newPerson = { name: newName, number: newNumber };

    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  let filteredPersons = persons;

  if (filter) {
    filteredPersons = persons.filter((person) =>
      person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>add a new</h3>

      <PersonForm
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleFormSubmit={handleFormSubmit}
      />

      <h3>Numbers</h3>

      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
