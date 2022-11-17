import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const handleScoreChange = (score: any) => {
    score++;
    console.log(score);
    return setScore(score);
  };
  
  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <hr />
      <button onClick={() => handleScoreChange(score)}>score = {score}</button>
    </div>
  );
}

export default App;
