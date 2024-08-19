import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
export const FontSizeControl = (props) => {
  const [rangeValue, setRangeValue] = useState(1);

  //Side Effects
  useEffect(() => {
    sendSizeToParent();
  }, [rangeValue]);

  // 2 way data Binding
  const sendSizeToParent = () => {
    props.setSize(rangeValue);
  };

  //Function Incerment
  const handleIncrement = () => {
    if (rangeValue < 20) {
      console.log(rangeValue);
      setRangeValue(rangeValue + 1);
    } else {
      alert("Maximum Font Size is 20");
    }
  };
  //Function Decrement
  const handleDecrement = () => {
    if (rangeValue > 1) {
      setRangeValue(rangeValue - 1);
    } else {
      alert("Minimum Font Size is 1");
    }
  };
  return (
    <div className="w-96 h-40 border border-black m-2 p-2">
      <h1 className="font-bold text-center text-xl mb-7">
        Font Size Controller
      </h1>
      <div className="ml-14">
        <button
          type="button"
          className=" m-3 p-1 active:scale-90 hover:bg-black hover:text-white rounded-lg"
          onClick={handleDecrement}
        >
          <FaMinus />
        </button>
        <input
          type="range"
          min={1}
          max={20}
          value={rangeValue}
          onChange={(e) => {
            setRangeValue(+e.target.value);
          }}
          className="cursor-pointer"
        />
        <button
          type="button"
          className=" m-3 p-1 active:scale-90 hover:bg-black hover:text-white rounded-lg"
          onClick={handleIncrement}
        >
          <FaPlus />
        </button>
      </div>

      <p>Range Value : {rangeValue}</p>
    </div>
  );
};
