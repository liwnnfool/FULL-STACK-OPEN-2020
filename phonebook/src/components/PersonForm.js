import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  addNewName,
  newNumber,
  addNewNumber,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={addNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={addNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;