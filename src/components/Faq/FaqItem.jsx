import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";
const FaqItem = ({ item, open, toggle }) => {
  return (
    <>
      <li
        className={`${
          open ? "text-primaryBlack" : "text-question "
        } text-lg transition-all font-semibold py-4 flex items-center gap-2 border-gray-400 border-b cursor-pointer`}
        onClick={toggle}
      >
        <IoIosArrowDown
          className={`${open ? "rotate-180 transition-all" : "rotate-0"}`}
        />
        {item.question}
      </li>
      <p
        className={`${
          open ? "contentShow" : "contentHide"
        } text-base font-normal text-primaryBlack mt-4`}
      >
        {item.answer}
      </p>
    </>
  );
};

export default FaqItem;
