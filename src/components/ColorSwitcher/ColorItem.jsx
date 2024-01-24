import React from "react";

const ColorItem = ({ color, setColor, id }) => {
  return (
    <div
      className="h-8 w-8 rounded-full"
      style={{ background: color }}
      onClick={setColor}
      id={id}
    ></div>
  );
};

export default ColorItem;
