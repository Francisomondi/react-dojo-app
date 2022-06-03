import React from "react";
import { useState } from "react";

const Hello = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(false);

  const increment = () => {
    setCounter(counter + 1);
  };

  if (display) {
    return (
      <div>
        <h2>hello, this is a message</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>hello, this is not a message</h2>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2>hello, this is not a message</h2>
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
