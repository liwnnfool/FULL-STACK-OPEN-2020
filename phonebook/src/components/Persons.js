import React from "react";
import "./person.css"

const Person = ({ person }) => {
  return (
    <p className="person">
      {person.name} {person.number}
    </p>
  );
};

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person person={person} key={person.name} />
      ))}
    </div>
  );
};

export default Persons;
