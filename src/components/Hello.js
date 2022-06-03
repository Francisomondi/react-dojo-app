import React from "react";
import { useState } from "react";

const Hello = () => {
  const [counter, setCounter] = useState(0);
  const displayMessage = () => {
    return "this is the message";
  };
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>
        <h2>hello, {displayMessage()}</h2>
      </div>
      <div>
        <h3>Counter value : {counter}</h3>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Hello;
