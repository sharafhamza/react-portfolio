import React from "react";

const Title = ({ text }) => {
  return (
    <h2 className=" text-black text-3xl 768:text-4xl 992:text-40 inline-block text-center mt-2 font-semibold">
      {text}
    </h2>
  );
};

export default Title;
