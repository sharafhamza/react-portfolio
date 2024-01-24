import React from "react";
import DescriptionTitle from "./DescriptionTitle";
import DescriptionSubTitle from "./DescriptionSubTitle";
import Description2 from "../../Description/Description2";
const Detailitem = ({ descriptionTitle, descriptionSubTitle, description }) => {
  return (
    <div className="border-b pb-5">
      <DescriptionTitle descriptionTitle={descriptionTitle} />
      <DescriptionSubTitle descriptionSubTitle={descriptionSubTitle} />
      <Description2 text={description} />
    </div>
  );
};

export default Detailitem;
