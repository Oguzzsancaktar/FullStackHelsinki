import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FunctionalComponent = () => {
  const [anecdotes, setAnecdotes] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/anecdotes').then((result) => {
      console.log(result.data);
      setAnecdotes(result.data);
    });
  }, []);

  const handleClick = () => {
    setCurrent(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      {anecdotes.length === 0 ? 'no anecdote' : <p>{anecdotes[current].content}</p>}
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default FunctionalComponent;
