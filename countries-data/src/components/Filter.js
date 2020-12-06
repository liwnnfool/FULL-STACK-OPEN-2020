import React from "react";

const Filter = ({ query, handleQueryChange }) => {
  return (
    <>
      <label htmlFor="queryInput">find countries </label>
      <input
        type="text"
        id="queryInput"
        value={query}
        onChange={handleQueryChange}
      />
    </>
  );
};

export default Filter;
