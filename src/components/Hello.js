import React from "react";

const Hello = () => {
  const displayMessage = () => {
    return "hello this is the message";
  };
  return (
    <div>
      <h2>hello, {displayMessage()}</h2>
    </div>
  );
};

export default Hello;
