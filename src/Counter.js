import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleUp = () => {
    setCount(count + 1);
  };
  const handleDown = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ "background-color": "grey" }}>
      <div>This is counter component</div>
      <p>You clicked {count} times</p>
      <button onClick={handleUp}>Up</button>
      <button onClick={handleDown}>Down</button>
    </div>
  );
};
export default Counter;
