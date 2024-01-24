import React, { useEffect, useState } from "react";
import ColorItem from "./ColorItem";
import { IoIosSettings } from "react-icons/io";
import "./style.css";
const ColorSwitch = () => {
  const colors = [
    "#00FFFF",
    "#00FE9C",
    "#ADFF2F",
    "#D6ED17",
    "#FF91FB",
    "#FDBB2E",
    "#EEE8AA",
    "#F5DF4E",
  ];
  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    setTheme(currentColor);
  }, []);
  const setTheme = (color) => {
    const elementsBg = document.querySelectorAll(".bg-primary");
    const elementsText = document.querySelectorAll(".text-primary");
    const elementsBorder = document.querySelectorAll(".border-primary");

    // // const colorLoop = (name, property) => {
    // //   name.forEach((element) => {
    // //     element.style.property = `${color}`;
    // //   });
    // };
    // colorLoop(elementsBg, "background");
    // elementsAfter.forEach((element) => {
    //   element.style.backgroundColor = `${color}`;
    // });
    elementsBg.forEach((element) => {
      element.style.backgroundColor = `${color}`;
    });
    elementsText.forEach((element) => {
      element.style.color = `${color}`;
    });
    elementsBorder.forEach((element) => {
      element.style.borderColor = `${color}`;
    });
  };
  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("background");
    localStorage.setItem("color", currentColor);
    setTheme(currentColor);
  };
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${
        show && "IscolorOpen"
      } bg-white w-44 h-44 flex shadow  flex-col justify-start pl-4 absolute switch IscolorClosed`}
    >
      <span className="text- h-12 flex flex-col justify-center items-center w-12 bg-gray-500 text-white absolute  top-0 rounded cursor-pointer left-0 -translate-x-[46px]">
        <IoIosSettings className=" !text-32" onClick={() => setShow(!show)} />
      </span>
      <h4 className="border-b-2 my-4 py-2 font-semibold">Color Switcher</h4>
      <div className="colorList flex mx-auto w-36 gap-y-2 justify-between flex-wrap">
        {colors.map((color, id) => (
          <ColorItem color={color} id={id} setColor={setColor} />
        ))}
      </div>
    </div>
  );
};

export default ColorSwitch;
