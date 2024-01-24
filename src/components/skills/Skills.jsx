import React from "react";
import SkillItem from "./SkillItem.jsx/SkillItem";
import { Container, ResumeTitle, SkillButton } from "../DefaultExport";
import Fade from "react-reveal/Fade";
const Skills = () => {
  return (
    <div className="pb-16 pt-10">
      <Container>
        <ResumeTitle resumeTitle="My Skills" className="mb-4" />
        <Fade bottom>
          <div className="flex gap-6 flex-col 768:flex-row justify-between">
            <div className="left w-full 768:w-48 flex flex-col gap-6">
              <SkillItem
                skillHeading="Web Design"
                skillPercent="65"
                skillShow="65"
              />
              <SkillItem
                skillHeading="JavaScript"
                skillPercent="85"
                skillShow="85"
              />
              <SkillItem
                skillHeading="Angular Js"
                skillPercent="60"
                skillShow="60"
              />
            </div>
            <div className="right w-full 768:w-48 flex flex-col gap-6">
              <SkillItem
                skillHeading="HTML/CSS"
                skillPercent="95"
                skillShow="95"
              />
              <SkillItem
                skillHeading="React JS"
                skillPercent="70"
                skillShow="70"
              />
              <SkillItem
                skillHeading="Tailwind"
                skillPercent="99"
                skillShow="99"
              />
            </div>
          </div>
        </Fade>
        <SkillButton buttonText="Download CV" />
      </Container>
    </div>
  );
};

export default Skills;
