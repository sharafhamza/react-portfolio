import React from "react";

const NavItem = ({ text, class_name }) => {
  return (
    <li
      className={`text-deepWhite font-semibold text-21 ${
        class_name && "!text-primary"
      } cursor-pointer ease-in hover:text-primary `}
    >
      {text}
    </li>
  );
};

export default NavItem;
