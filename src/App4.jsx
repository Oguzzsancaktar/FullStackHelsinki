import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [counters, setCounters] = useState({ left: 0, right: 0 });

  const handleRightClick = () => {
    // const newClick = {
    //   ...counters,
    //   right: counters.right + 1,
    // };
    // setCounters(newClick);

    setCounters({...counters , right: counters.right+=1})
  };

  const handleLeftClick = () => {
    const newClick = {
      ...counters,
      left: counters.left + 1,
    };
    setCounters(newClick);
  };

  return (
    <div>
      <p>
        {" "}
        Left ={">"} {counters.left}{" "}
      </p>

      <Button onClick={handleLeftClick} text="plus + left" />
      <Button text="minus - left" />

      <p>
        {" "}
        Right ={">"} {counters.right}{" "}
      </p>

      <Button onClick={handleRightClick} text="plus + right" />
      <Button text="minus - right" />
    </div>
  );
};
export default App;
