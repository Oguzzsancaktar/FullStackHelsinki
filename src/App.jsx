import React from "react";
import Text from "./components/text";

 const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>

      <p> {now.toString()} </p>
      <p>{a + b}</p>

      <Text name="oguz"/>
      <Text name="taha"/>


    </div>
  )

  

  ;
};

export default App;