import React from "react";
import IconItem from "./IconItem";

const FooterIcon = ({ icon }) => {
  return (
    <div className="footerIcons flex">
      <IconItem icon={icon} />
    </div>
  );
};

export default FooterIcon;
