import { Counter } from "./Counter";
import "./App.css";

export function App() {
  return (
    <>
      <Counter startCounter={0} incrementCounter={1} decrementCounter={1} />
    </>
  );
}
