import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebook from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    phonebook.getAll().then((initialPerosns) => {
      setPersons(initialPerosns);
    });
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const showError = (errorMessage) => {
    alert(errorMessage);
  };

  const showMessage = (message) => {
    return window.confirm(message) ? true : false;
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

  const checkUpdate = () => {
    const person = persons.find((p) => p.name === newName);

    if (!person) return false;
    if (
      !showMessage(
        `${person.name} has alerady added to phonebook, replace the old number with a new one ?`
      )
    ) {
      return false;
    }
    phonebook
      .update(person.id, { ...person, number: newNumber })
      .then((newData) => {
        setPersons(persons.map((p) => (p.id === person.id ? newData : p)));
        setNewName("");
        setNewNumber("");
      });

    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!checkInput()) {
      return;
    }
    if (checkUpdate()) {
      return;
    }
    const newPerson = { name: newName, number: newNumber };

    phonebook.create(newPerson).then((newPerson) => {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleDel = (id) => {
    const person = persons.find((p) => p.id === id);

    if (!showMessage(`Delete ${person.name}`)) return;
    phonebook.del(id).then(() => {
      setPersons(persons.filter((p) => p.id !== id));
    });
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

      <Persons persons={filteredPersons} onDel={handleDel} />
    </div>
  );
};

export default App;
