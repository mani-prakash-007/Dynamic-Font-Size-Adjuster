import React from "react";

export const TextDisplay = ({ size }) => {
  const fontSize = {
    1: "text-1x",
    2: "text-2x",
    3: "text-3x",
    4: "text-4x",
    5: "text-5x",
    6: "text-6x",
    7: "text-7x",
    8: "text-8x",
    9: "text-9x",
    10: "text-10x",
    11: "text-11x",
    12: "text-12x",
    13: "text-13x",
    14: "text-14x",
    15: "text-15x",
    16: "text-16x",
    17: "text-17x",
    18: "text-18x",
    19: "text-19x",
    20: "text-20x",
  };

  return (
    <div
      className={`w-96 h-48 border border-black m-2 p-2 ${
        size === 20 || size === 1 ? "bg-red-500" : "bg-green-500"
      }`}
    >
      <h1 className="font-bold text-center text-xl mb-7">Text Display</h1>
      <p className={`${fontSize[size]} text-center`}>Font Size</p>
    </div>
  );
};
