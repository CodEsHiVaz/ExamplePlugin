"use client";
import React, { useState } from "react";

const SumPlugin = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (e.target.id === "num1") {
      setNum1(value);
    } else if (e.target.id === "num2") {
      setNum2(value);
    }
  };

  const calculateSum = () => {
    setSum(num1 + num2);
  };

  return (
    <div>
      <h2>Sum Plugin</h2>
      <label htmlFor="num1">Number 1: </label>
      <input
        type="number"
        id="num1"
        value={num1}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="num2">Number 2: </label>
      <input
        type="number"
        id="num2"
        value={num2}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={calculateSum}>Calculate Sum</button>
      <br />
      {sum > 0 && <p>Sum: {sum}</p>}
    </div>
  );
};

export default SumPlugin;
