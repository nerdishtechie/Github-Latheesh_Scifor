
import React, { createContext, useReducer, useContext } from 'react';



const CounterContext = createContext();

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);


const Counter = () => {
  const { count, dispatch } = useCounter();

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <div className="buttons">
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
