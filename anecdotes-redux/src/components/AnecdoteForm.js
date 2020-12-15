import React from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
import {setNotification, removeNotification} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const newAnecdote = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";

    dispatch(addAnecdote(content));
    dispatch(setNotification(`${content} added successfully`))

    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
