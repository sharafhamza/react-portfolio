import React from "react";
import "../index.css";
import { Container, PrimaryButton, WhiteTitle } from "../DefaultExport";
const Hire = () => {
  return (
    <div className="bg-hire z-[1] bg-cover bg-center bg-no-repeat h-auto relative w-auto bg-fixed py-16">
      <Container className="text-center py-10">
        <div className="overly z-[-1]"></div>
        <WhiteTitle
          className="text-40 font-semibold text-white mb-6 py-4"
          text="Interested in working with me?"
        />
        <PrimaryButton buttonText="Hire Me!" />
      </Container>
    </div>
  );
};

export default Hire;
