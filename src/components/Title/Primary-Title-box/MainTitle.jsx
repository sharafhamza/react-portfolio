import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Fade from "react-reveal/Fade";
const MainTitle = ({ title1, title2, className }) => {
  return (
    <Fade bottom>
      <div className={`text-center ${className}`}>
        <SubTitle text={title1} />
        <Title text={title2} />
      </div>
    </Fade>
  );
};

export default MainTitle;
