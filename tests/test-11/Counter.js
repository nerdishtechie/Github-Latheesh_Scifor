import React, { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-display">Count: {count}</h1>
      <div className="button-container">
        <button className="counter-button increment" onClick={incrementCount}>Increment</button>
        <button className="counter-button decrement" onClick={decrementCount}>Decrement</button>
        <button className="counter-button reset" onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
