import React from "react";

const SkillButton = ({ buttonText }) => {
  return (
    <div className="text-center mt-16">
      <button className="px-8 py-3 bg-white border-2 border-primaryBlack hover:text-white hover:bg-primaryBlack text-base font-medium transition-all">
        {buttonText}
      </button>
    </div>
  );
};

export default SkillButton;
