import React from "react";
import { WhiteTitle } from "../DefaultExport";
import Input from "./Input";
import { FaArrowRight } from "react-icons/fa";
const SubmitFrom = () => {
  return (
    <>
      <WhiteTitle
        text="Estimate your Project?
"
        className="text-40 font-semibold "
      />
      <form className="flex flex-col mt-5 992:mt-0">
        <Input
          placeholder="Estimate your Project?
"
        />
        <Input
          placeholder="Your Email Address:
"
        />
        <Input
          placeholder="How can I Help you?:
"
          className="pb-15"
        />
        <button className="text-white text-base flex items-center py-4 gap-5 mx-auto 992:mx-0 w-40 justify-center bg-primaryBlack mt-6 hover:bg-primaryBlack">
          Send <FaArrowRight className="text-xl" />
        </button>
      </form>
    </>
  );
};

export default SubmitFrom;
