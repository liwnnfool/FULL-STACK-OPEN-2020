import React, { useState } from "react";
import Phonebook from "./components/Phonebook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

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
