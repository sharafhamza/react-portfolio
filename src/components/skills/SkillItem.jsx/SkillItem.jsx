import React from "react";
import SkillHeading from "./SkillHeading";
import SkillPercent from "./SkillPercent";
const SkillItem = ({ skillHeading, skillPercent }) => {
  return (
    <div>
      <SkillHeading skillHeading={skillHeading} skillShow={skillPercent} />
      <SkillPercent skillPercent={skillPercent} />
    </div>
  );
};

export default SkillItem;
