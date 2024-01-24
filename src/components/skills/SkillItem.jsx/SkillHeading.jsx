import React from "react";

const SkillHeading = ({ skillHeading, skillShow }) => {
  return (
    <h4 className="text-base font-medium text-primaryBlack flex justify-between">
      {skillHeading} <div>{skillShow}%</div>
    </h4>
  );
};

export default SkillHeading;
