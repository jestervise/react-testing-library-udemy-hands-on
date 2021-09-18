import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

export function replaceCamelWithSpace(name) {
  return name.replace(/\B([A-Z]\B)/g, " $1");
}

const MidnightBlue = "MidnightBlue";
const MediumVioletRed = "MediumVioletRed";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [color, setColor] = useState(MediumVioletRed);

  const buttonText =
    color === MediumVioletRed
      ? `Change To ${replaceCamelWithSpace(MidnightBlue)}`
      : `Change To ${replaceCamelWithSpace(MediumVioletRed)}`;

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
          color === MediumVioletRed
            ? setColor(MidnightBlue)
            : setColor(MediumVioletRed);
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
