import React, { useState } from "react";
import HeaderNav from "./Navber/HeaderNav";
import ContactInfo from "./ContactInfo/ContactInfo";
import Container from "../Container/Container";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo/Logo";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [fix, setFix] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  function setFixed() {
    if (window.scrollY >= 5) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <div
      className={`header ${fix && "sticky top-0 left-0"} w-full z-10 relative`}
    >
      <div
        className={`top-0 left-0 absolute z-10 w-full transition-all ${
          fix && "bg-black"
        }`}
      >
        <Container className=" flex justify-between py-4 ">
          <div className="leftSlide">
            <Logo />
          </div>
          <div className="rightSide flex items-center gap-4">
            <ContactInfo />
            <IoMenu
              className="text-white text-32 cursor-pointer"
              onClick={handleMenu}
            />
          </div>
        </Container>
        {menu && <HeaderNav menuHide={setMenu} menu={menu} />}
      </div>
    </div>
  );
};

export default Header;
