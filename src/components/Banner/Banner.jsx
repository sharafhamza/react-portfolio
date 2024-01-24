import React from "react";
import "../index.css";
import {
  WhiteTitle,
  AnimateText,
  Description2,
  PrimaryButton,
} from "../DefaultExport";
const Banner = () => {
  return (
    <>
      <div className="bg-bannerBg banner relative bg-cover bg-no-repeat min-h-lvh -z-0 flex flex-col items-center justify-center">
        <div className="content z-10  text-white text-center">
          <WhiteTitle
            text="HI, I'M A FREELANCER"
            className="font-normal text-32"
          />
          <AnimateText />
          <Description2
            text="based in Los Angeles, USA."
            className="text-21 !text-deepWhite mb-6"
          />
          <PrimaryButton buttonText="View My Works" />
        </div>
        <div className="overly -z-10"></div>
      </div>
    </>
  );
};

export default Banner;
