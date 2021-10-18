import React, { useState } from "react";
import Button from "./components/button";

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const increaseCounter = ()=>{
    setCounter(counter + 1)
  }

  const decreaseCounter = ()=>{
    setCounter(counter - 1)
  }

  const resetCounter = ()=>{
      setCounter(0)
  } 

  return (
    <div>
      <div>{counter}</div>

    <Button onClick={increaseCounter} text="Increase Counter By 1" />
    <Button onClick={decreaseCounter} text="Decrease Counter By 1" />
    <Button onClick={resetCounter} text="Reset Counter to 0" />


    </div>
  );
};
export default App;
