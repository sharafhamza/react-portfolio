import React from "react";

const SkillPercent = ({ skillPercent }) => {
  return (
    <div className="bg-ash h-2 rounded-full">
      <div
        className={`bg-primary h-full rouned-lb-full rounded-tl-full mt-2 rounded-bl-full`}
        style={{ width: `${skillPercent}%` }}
      ></div>
    </div>
  );
};

export default SkillPercent;
