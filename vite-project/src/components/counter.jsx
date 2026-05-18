import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter((prev) => prev + incrementAmount);
  }

  function decrement() {
    setCounter((prev) => prev - incrementAmount);
  }

  function reset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay count={counter} />

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}