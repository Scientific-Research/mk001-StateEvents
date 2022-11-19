import { useState } from "react";
import "./App.scss";

const _color = ["green"];

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState(_color);

  const handleScoreChange = (score: any) => {
    score++;
    setScore(score);
    console.log(score);
    if (score >= 5) {
      setCount(0);
    }
  };
  const handleColorChange = (farbe: any) => {
    // <div className={"background-green"} />;
    // <div className="background-red" style={{ backgroundColor: "red" }}></div>;
    // const _colors = [...color];
    // console.log(_colors);
    console.log(farbe);
    setColor(farbe);
  };

  return (
    <div className="App">
      <>
        {(document.body.style.backgroundColor = `${color}`)};
        {/* <div style={{ backgroundColor: `${color}` }}></div>; */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
        <button onClick={() => handleScoreChange(score)}>
          score = {score}
        </button>
        <button onClick={() => handleColorChange("yellow")}>
          Color = {color}
        </button>
        {/* {(count && score) !== 0 && <div>Count and Score are not Zero</div>} */}
        {/* {score > 5 && { scoreGreaterThanFive }} */}
        {/* {score > 5 && {setCount(0)}} */}
      </>
    </div>
  );
}

export default App;
