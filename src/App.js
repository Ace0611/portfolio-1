import logo from './logo.svg';
import './App.css';
import OpenAI from "openai"
import { useCallback, useState, useContext, createContext } from "react";

const UserContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const handleDelayedIncrement = useCallback(() => {
    // counter + 1 is the problem,
    // because the counter can be already different, when callback invokes
    setTimeout(() => setCounter((prev) => prev + 1), 1000);
  }, [counter]);

  return (
    <div className="App">
      <h1>{`Counter is ${counter}`}</h1>
      {/* This handler works just fine */}
      <button onClick={handleIncrement}>Instant increment</button>
      {/* Multi-clicking that handler causes unexpected states updates */}
      <button onClick={handleDelayedIncrement}>Delayed increment</button>
    </div>
  );
}

export default App;
