import React from "react";

const Text = (props) => {
  return (
    <>
      <p>{props.name}</p>
    </>
  );
};

const Header = (props) => {
  return (
    <>
      <h1> {props.course} </h1>
    </>
  );
};

const Content = (props) => {
  let textArr = props.parts.map((text, i)=>  <Text name={text['name']} key={i} />);
  return <>{textArr}</>;
};

const Total = (props) => {
  let totalVal = 0;
  props.parts.forEach((part) => {
    totalVal += part["exercises"];
  });
  return (
    <>
      <p>Number of experiences {totalVal}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",

    parts: [
      {
        name: "Fundamentals of Reactasdfasdfqw1",
        exercises: 11,
      },
      {
        name: "Fundamentals of Reactasdfasdfqw2",
        exercises: 22,
      },
      {
        name: "Fundamentals of Reactasdfasdfqw",
        exercises: 33,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
export default App;
