import React, { useState } from "react";
import { MainTitle, Container } from "../DefaultExport";
import FaqItem from "./FaqItem";
import { data } from "./Data";
import "./style.css";
const Faq = () => {
  const [show, setShow] = useState(0);

  const toggle = (i) => {
    if (show === i) {
      return setShow(null);
    }
    setShow(i);
  };
  return (
    <Container className="py-16 flex flex-col-reverse 992:flex-row">
      <div className="w-full 992:w-1/2 ">
        <MainTitle
          className="text-center mb-6 992:mb-0 mt-6 992:mt-0 992:text-left"
          title1="FAQ"
          title2="Have any question?"
        />
        <ul className="item mt-8 py-6">
          {data.map((item, i) => (
            <FaqItem
              item={item}
              open={i === show}
              toggle={() => toggle(i)}
              key={i}
            />
          ))}
        </ul>
      </div>
      <div className="w-full 992:w-1/2 mb-4 992:mb-0">
        <img
          className="mx-auto 992:mx-auto 992:ml-auto w-3/4"
          src="./images/faq.png"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Faq;
