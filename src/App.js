import React, { useState } from 'react';

const Hello = (props) => {
  return (
    <div>Hello World! {props.num}</div>
  );
}

function App() {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
  }

  return (
    <div className="App">
      <Hello num={number} />
      <div>Number={number}</div>
      <button onClick={add}>Add</button>

      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" fill="blue" />
      </svg>
    </div>
  );
}

export default App;
