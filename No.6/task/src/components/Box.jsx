import React, { useState, useEffect } from "react";

const DynamicBox = ({ bgColor }) => {
  const [background, setBackground] = useState(bgColor);

  useEffect(() => {
    setBackground(bgColor); // Update background color when prop changes
  }, [bgColor]);

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: background, // Dynamic background color
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        transition: "background-color 0.5s ease-in-out", // Smooth transition effect
      }}
    >
      Dynamic Box
    </div>
  );
};

export default DynamicBox;

