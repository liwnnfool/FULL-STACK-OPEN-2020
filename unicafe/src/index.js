import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all) {
    return (
      <table>
        <tbody>
          <Statistic feedback={good} text="good" />
          <Statistic feedback={neutral} text="neutral" />
          <Statistic feedback={bad} text="bad" />
          <Statistic feedback={all} text="all" />
          <Average all={all} good={good} bad={bad} />
          <Positive good={good} all={all} />
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

const Statistic = ({ feedback, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{feedback}</td>
    </tr>
  );
};

const Average = ({ all, good, bad }) =>
  all ? (
    <tr>
      <td>average</td> 
      <td>{(good - bad) / all}</td>
    </tr>
  ) : (
    <tr>
      <td>average</td> 
      <td>{0}</td>
    </tr>
  );

const Positive = ({ good, all }) =>
  all ? (
    <tr>
      <td>positive</td> 
      <td>{good / all}%</td>
    </tr>
  ) : (
    <tr>
      <td>positive</td> 
      <td>{0}</td>
    </tr>
  );

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <h2>give feedback</h2>

      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <h2>Statistics</h2>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
