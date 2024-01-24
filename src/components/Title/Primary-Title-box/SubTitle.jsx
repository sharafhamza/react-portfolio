import React from "react";

const SubTitle = ({ text }) => {
  return (
    <div>
      <h4
        className={`bg-primary 
      font-normal inline-block px-2 text-base `}
      >
        {text}
      </h4>
    </div>
  );
};

export default SubTitle;
