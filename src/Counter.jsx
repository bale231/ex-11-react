import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ startCounter, incrementCounter, decrementCounter }) {
  let [counter, setCounter] = useState(startCounter);

  let setter = () => {
    setCounter((value) => value + incrementCounter);
  };

  let decrement = () => {
    const dec = 0;
    if (dec < counter) {
      setCounter((value) => value - decrementCounter);
    }
  };

  let reset = () => {
    setCounter((value) => (value = startCounter));
  };

  return (
    <div className="card">
      <CounterDisplay count={counter} />
      <button onClick={setter}>Aumenta valore</button>
      <button onClick={decrement}>Diminuisci valore</button>
      <button onClick={reset}>Azzera valore</button>
    </div>
  );
}
