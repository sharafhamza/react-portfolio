import React from "react";

const Input = ({ placeholder, className }) => {
  return (
    <input
      type="text"
      className={`pb-16 mt-4 bg-transparent placeholder:text-primaryBlack border-b inline-block  border-primaryBlack ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
