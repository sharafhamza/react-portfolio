import React from "react";
import { Container, MainTitle } from "../DefaultExport";
import ServiceItem from "./Item/ServiceItem";
import { FaPalette } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { FaPencilRuler } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
const Service = () => {
  return (
    <div className="bg-sectionBg py-20">
      <Container>
        <MainTitle
          title1="What I Do?"
          title2="How I can help your next project"
        />
        <div className="flex flex-wrap mt-10 gap-y-6">
          <ServiceItem
            icon={<FaPalette />}
            title="
Graphic Design"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
          <ServiceItem
            icon={<RiComputerLine />}
            title="
Web Design"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
          <ServiceItem
            icon={<FaPencilRuler />}
            title="
Web Design"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
          <ServiceItem
            icon={<FaPaintBrush />}
            title="
App Design & Develop"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
          <ServiceItem
            icon={<FaChartArea />}
            title="
Business Analysis"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
          <ServiceItem
            icon={<FaBullhorn />}
            title="
SEO Marketing"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
        </div>
      </Container>
    </div>
  );
};

export default Service;
