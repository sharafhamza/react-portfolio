import React from "react";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import { RxCross2 } from "react-icons/rx";
import NavItem from "./NavItem";
import "./style.scss";
const HeaderNav = ({ menuHide, menu }) => {
  return (
    <>
      <ul
        className={`${menu && "navActive"}
        bg-black flex justify-center flex-col navItems .t items-center gap-y-5 transition-all`}
      >
        <RxCross2
          className={`cross text-deepWhite text-26 `}
          onClick={() => menuHide(!menu)}
        />
        <NavItem text="Home" class_name="active" />
        <NavItem text="About Me" />
        <NavItem text="What I Do" />
        <NavItem text="Resume" />
        <NavItem text="Portfolio" />
        <NavItem text="FAQ" />
        <NavItem text="Client Speak" />
        <NavItem text="Contact Me" />
        <HeaderIcon />
      </ul>
    </>
  );
};

export default HeaderNav;
