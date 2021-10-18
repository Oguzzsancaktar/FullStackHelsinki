import React, { useState } from "react";
import Button from "./components/Button";
import History from "./components/History";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setLeft(left + 1)
    setAll(allClicks.concat('L'))
  };

  const handleRightClick = () => {
    setRight(right + 1)
    setAll(allClicks.concat('R'))

  };

  return (
    <div>
      <p> {left} </p>
      <Button onClick={handleLeftClick} text="Left Click" />

      <p> {right} </p>
      <Button onClick={handleRightClick } text="Right Click" />

      <History allClicks={allClicks}  />
    </div>
  );
};
export default App;

