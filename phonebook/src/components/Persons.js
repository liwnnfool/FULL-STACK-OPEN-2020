import React from "react";
import "./person.css"

const Person = ({ person, onDel }) => {
  return (
    <p className="person">
      {person.name} {person.number} <button onClick={onDel}>del</button>
    </p>
  );
};

const Persons = ({ persons, onDel }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person person={person} onDel={() => onDel(person.id)} key={person.name} />
      ))}
    </div>
  );
};

export default Persons;
