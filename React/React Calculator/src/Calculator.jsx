import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  const calculateResult = () => {
    try {

      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          {result !== null ? result : input || "0"}
        </div>
        <div className="buttons-grid">
          {buttons.map((char) => (
            <button
              key={char}
              className={`button ${["/", "*", "-", "+", "="].includes(char) ? "operator" : "number"}`}
              onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
            >
              {char}
            </button>
          ))}
          <button className="button clear" onClick={clearInput}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}
