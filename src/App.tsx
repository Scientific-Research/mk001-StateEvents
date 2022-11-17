import { useState } from "react";
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
      {(count && score) !== 0 && <div>Count and Score are not Zero</div>}
    </div>
  );
}

export default App;
