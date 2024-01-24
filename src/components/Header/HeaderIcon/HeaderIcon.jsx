import React from "react";
import IconItem from "./IconItem";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

// import "./style.scss";
const HeaderIcon = () => {
  return (
    <ul className="icons mt-4 flex gap-5">
      <IconItem icon={<FaFacebook />} />
      <IconItem icon={<FaTwitter />} />
      <IconItem icon={<FaInstagram />} />
      <IconItem icon={<FaLinkedinIn />} />
      <IconItem icon={<FaDribbble />} />
    </ul>
  );
};

export default HeaderIcon;
