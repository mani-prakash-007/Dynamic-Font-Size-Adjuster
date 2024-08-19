import React, { useState } from "react";
import { FontSizeControl } from "./FontSizeControl";
import { TextDisplay } from "./TextDisplay";

export const FontSizeApp = () => {
  //States
  const [fontSize, setFontSize] = useState();

  //Setter Function
  const setSize = (size) => {
    setFontSize(size);
  };

  return (
    <div>
      <div>
        <FontSizeControl setSize={setSize} />
        <TextDisplay size={fontSize} />
      </div>
    </div>
  );
};
