import React, { useState } from "react";
import DynamicBox from "./components/Box";

const App = () => {
  const [color, setColor] = useState("blue");

  const changeColor = () => {
    const colors = ["blue", "red", "green", "purple", "orange"];
    setColor(colors[Math.floor(Math.random() * colors.length)]); // Pick a random color
  };

  return (
    <div>
      <button onClick={changeColor} style={{ marginBottom: "10px" }}>
        Change Color
      </button>
      <DynamicBox bgColor={color} />
    </div>
  );
};

export default App;

