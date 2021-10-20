import React, { useState, useEffect } from "react";
import Anecdotes from "./components/Anecdotes";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

var counter = 0;

const App = () => {
  // anecdote
  const [anecdotes, setAnecdotes] = useState([
    { vote: 0, anecdote: "If it hurts, do it more often" },
    {
      vote: 0,
      anecdote: "Adding manpower to a late software project makes it later!",
    },
    {
      vote: 0,
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    },
    {
      vote: 0,
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    },
    { vote: 0, anecdote: "Premature optimization is the root of all evil." },
    {
      vote: 0,
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    },
    {
      vote: 0,
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients}",
    },
  ]);

  const [selected, setSelected] = useState(0);

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [mostVoted, setMostVoted] = useState(anecdotes[0]);

  var all = good + neutral + bad;
  var avarage = (good - bad) / all;
  var positive = (good / all) * 100;

  const [statistics, setStatistics] = useState({
    good: good,
    neutral: neutral,
    bad: bad,
    all: 0,
    avarage: 0,
    positive: 0,
  });

  const takeAnecdote = () => {
    counter++;
    if (counter < anecdotes.length) {
      setSelected(counter);
    } else {
      counter = 0;
      setSelected(counter);
    }
  };

  const voteAnecdote = () => {
    const copy = [...anecdotes];
    copy[selected]["vote"] += 1;
    setAnecdotes(copy);

    for (let i = 0; i < copy.length; i++) {
      if (mostVoted.vote < copy[i].vote) {
        setMostVoted(copy[i]);
      }
    }
  };

  // Unicafe

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const handleStatistics = () => {
    setStatistics({ good, neutral, bad, all, avarage, positive });
  };

  useEffect(() => {
    handleStatistics();
  }, [good, neutral, bad]);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleEvent={handleGood} eventText="Good" />
      <Button handleEvent={handleNeutral} eventText="Neutral" />
      <Button handleEvent={handleBad} eventText="Bad" />

      <h2>Statics</h2>
      <Statistics statistics={statistics} />

      <h1>Anecdotes</h1>
      <Anecdotes text={anecdotes[selected]["anecdote"]} />
      <p>{anecdotes[selected]["vote"]}</p>
      <Button handleEvent={takeAnecdote} eventText="Next Anecdote" />
      <Button handleEvent={voteAnecdote} eventText="Vote" />

      <h2>Anecdote With Most Wotes</h2>
      <Anecdotes text={mostVoted.anecdote} />
      <p>Voted {mostVoted.vote} times</p>
    </div>
  );
};

export default App;
