import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const AnimateText = () => {
  const [text] = useTypewriter({
    words: ["DESIGNER", "DEVELOPER", "CALLUM"],
    loop: {},
  });
  return (
    <h1 className="text-white text-6xl 576:text-7xl 768:text-9xl 992:text-124 font-semibold">
      {text}
      <span>
        <Cursor />
      </span>
    </h1>
  );
};

export default AnimateText;
