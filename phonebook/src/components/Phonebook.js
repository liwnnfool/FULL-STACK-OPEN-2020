import React from "react";

const Person = ({ person }) => {
  return (
    <p style={{ margin: 0 }}>
      {person.name} {person.number}
    </p>
  );
};

const Phonebook = ({ persons, filterName }) => {
  const phonebookToShow = !filterName
    ? persons
    : persons.filter((person) =>
        person.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
      );

  return (
    <div>
      {phonebookToShow.map((person) => (
        <Person person={person} key={person.name} />
      ))}
    </div>
  );
};

export default Phonebook;
