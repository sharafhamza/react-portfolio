import React from "react";

const ResumeTitle = ({ resumeTitle, className }) => {
  return (
    <h2 className={`text-primaryBlack ${className} font-semibold text-28`}>
      {resumeTitle}
    </h2>
  );
};

export default ResumeTitle;
