import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

export function replaceCamelWithSpace(name) {
  return name.replace(/\B([A-Z]\B)/g, " $1");
}

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [color, setColor] = useState("red");

  const buttonText = color === "red" ? "Change To Blue" : "Change To Red";

  return (
    <div className="App">
      <button
        style={{
          backgroundColor: isDisabled ? "gray" : color,
          color: "white",
          border: "none",
          padding: "5px 10px",
        }}
        disabled={isDisabled}
        onClick={() => {
          color === "red" ? setColor("blue") : setColor("red");
        }}
      >
        {buttonText}
      </button>
      <div>
        <label htmlFor="checkbox-l">Disable button</label>
        <input
          type="checkbox"
          id="checkbox-l"
          defaultChecked={isDisabled}
          aria-checked={isDisabled}
          onChange={() => {
            setIsDisabled(!isDisabled);
          }}
        />
      </div>
    </div>
  );
}

export default App;
