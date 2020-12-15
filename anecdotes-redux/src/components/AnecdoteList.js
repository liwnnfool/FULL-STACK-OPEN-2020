import React from "react";
import { useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotification, removeNotification } from "../reducers/notificationReducer";

const AnecdoteList = ({filter, anecdotes}) => {
  const dispatch = useDispatch();

  const anecdotesToShow = () => {
    if (filter.inputValue === '') return anecdotes

    return anecdotes
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.inputValue.toLowerCase()))
  }
  return (
    <>
      {anecdotesToShow()
        .sort((a, b) => (a.votes <= b.votes ? 1 : -1))
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => {
                  dispatch(addVote(anecdote.id));
                  dispatch(setNotification(`you voted "${anecdote.content}"`))
                  setTimeout(() => {
                    dispatch(removeNotification())
                  }, 5000)
                }}
              >
                vote
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default AnecdoteList;
