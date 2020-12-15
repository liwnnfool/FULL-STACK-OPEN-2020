import React from "react";
import filter from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const filterValue = e.target.value;
    dispatch(filter(filterValue));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      <label htmlFor="filter">filter</label>
      <input id="filter" onChange={handleChange} />
    </div>
  );
};

export default Filter;
