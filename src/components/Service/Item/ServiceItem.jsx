import React from "react";

import ServiceIcon from "./ServiceIcon";
import ServiceTitle from "./ServiceTitle";
import Description2 from "../../Description/Description2";
import Fade from "react-reveal/Fade";
const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="992:w-2/6 px-0 992:px-6 576:w-3/6 w-full text-center">
      <Fade bottom>
        <ServiceIcon icon={icon} />
        <ServiceTitle title={title} />
        <Description2 text={description} />
      </Fade>
    </div>
  );
};

export default ServiceItem;
