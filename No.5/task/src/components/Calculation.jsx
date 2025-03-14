import React from 'react';

const a = 20;
const b = 30;

const Calculator = () => {
  return a + b;
};

const Calculation = () => {
  const result = Calculator();
  return (
    <div>
      <h1>The normal addition</h1>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default Calculation;
