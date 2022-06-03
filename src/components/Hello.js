import React from "react";
import { useState } from "react";

const Hello = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(true);

  let output;
  if (display) {
    output = <h2>hello, this is a message</h2>;
  } else {
    output = <h2>hello, this is not a message</h2>;
  }
  return <div>{output}</div>;
};

export default Hello;
