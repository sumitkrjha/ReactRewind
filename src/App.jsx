import React, { useState } from "react";
import "./App.css";
const App = () => {
  const colorList = [
    "Red",
    "Green",
    "Blue",
    "Olive",
    "Gray",
    "Yellow",
    "Pink",
    "Purple",
    "Lavender",
    "White",
    "Black",
  ];

  const darkColor = ["Yellow", "Lavender", "White", "Pink"];
  const [bgColor, setBgColor] = useState("Gray");
  return (
    <div id="bgContainer" style={{ backgroundColor: bgColor }}>
      <div id="colorControllerContainer">
        <div id="paletteBox">
          {colorList.map((oneColor) => {
            return (
              <button
                id="color"
                key={oneColor}
                style={{
                  backgroundColor: oneColor,
                  color: darkColor.includes(oneColor) ? "Black" : "white",
                }}
                onClick={() => setBgColor(oneColor)}
              >
                {oneColor}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
