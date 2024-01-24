import React from "react";

const Description1 = ({ text, className }) => {
  return (
    <p className={`text-primaryBlack ${className} text-21  leading-1.7`}>
      {text}
    </p>
  );
};

export default Description1;
