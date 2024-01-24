import React from "react";

const PrimaryButton = ({ buttonText }) => {
  return (
    <button className="bg-primary py-4 px-10 text-primaryBlack text-base font-semibold">
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
