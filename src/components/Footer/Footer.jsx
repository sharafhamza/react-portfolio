import { Container, Description1, WhiteTitle } from "../DefaultExport";
import Fade from "react-reveal/Fade";

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import FooterIcon from "./FooterIcons";
import SubmitFrom from "./SubmitFrom";
const Footer = () => {
  return (
    <div className="bg-primary py-16">
      <Container className="992:flex-row flex flex-col gap-10 justify-between py-10 text-center 992:text-left">
        <Fade bottom>
          <div className="w-full 992:w-2/5">
            <WhiteTitle
              text="Let's get in touch"
              className="text-40 font-semibold mb-2"
            />
            <Description1
              text="I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up."
              className="text-21 font-normal"
            />
            <div className=" mt-5">
              <WhiteTitle
                text="Living In:"
                className="text-21 font-semibold mb-1"
              />
              <WhiteTitle
                text="30 Shacham street, Los Angeles, USA."
                className="text-lg font-normal"
              />
            </div>
            <div className=" mt-5">
              <WhiteTitle text="Call:" className="text-21 font-semibold mb-1" />
              <WhiteTitle
                text="(+060) 444 434 444"
                className="text-lg font-normal"
              />
            </div>
            <div className="flex gap-x-5 mt-6 justify-center 992:justify-start">
              <FooterIcon icon={<FaFacebook />} />
              <FooterIcon icon={<FaTwitter />} />
              <FooterIcon icon={<FaInstagram />} />
              <FooterIcon icon={<FaLinkedinIn />} />
              <FooterIcon icon={<FaDribbble />} />
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="w-full 992:w-3/6 mt-10 992:mt-0">
            <SubmitFrom />
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default Footer;
