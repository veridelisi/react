app.js

import React from "react";
const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.excercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} excercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} excercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} excercises={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of excercises : "
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}{" "}
      "
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
export default App;




index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'))


index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lesson 01</title>
</head>
<body>
  <div id="app"></div>
  <script src="index.js"></script>
</body>
</html>

https://codesandbox.io/s/optimistic-dawn-k5m7x?file=/src/index.js
