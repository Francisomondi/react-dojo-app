import React from "react";
import { useState } from "react";

const Hello = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(false);

  return display ? (
    <div>
      <h2>hello, this is a message</h2>
    </div>
  ) : (
    <div>
      <h2>hello, this is not a message</h2>
    </div>
  );
};

export default Hello;
