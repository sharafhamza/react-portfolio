import React from "react";
import Detailitem from "./Detailitem";
const Details = ({ descriptionTitle, descriptionSubTitle, description }) => {
  return (
    <Detailitem
      descriptionTitle={descriptionTitle}
      descriptionSubTitle={descriptionSubTitle}
      description={description}
    />
  );
};

export default Details;
