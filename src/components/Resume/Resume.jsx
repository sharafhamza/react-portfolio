import React from "react";
import { Container, MainTitle, Details, ResumeTitle } from "../DefaultExport";
import Fade from "react-reveal/Fade";
const Resume = () => {
  return (
    <Container className="py-16">
      <MainTitle
        title1="Resume"
        title2="A summary of My Resume
"
      />
      <div className="resume mt-14 flex gap-20 flex-col 992:flex-row">
        <Fade bottom>
          <div className="education w-full 992:w-1/2">
            <ResumeTitle resumeTitle="My Education" className="mb-6 pl-2" />
            <div className="border-primary flex flex-col gap-5 border-l-2 pl-5">
              <Details
                descriptionTitle="Master in Computer Engineering"
                descriptionSubTitle="Harvard University / 2015 - 2017
          "
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
              />
              <Details
                descriptionTitle="Bachelor in Computer Engineering"
                descriptionSubTitle="University of California / 2014 - 2015
          "
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
              />
              <Details
                descriptionTitle="International Science"
                descriptionSubTitle="Harvard University / 2013 - 2014
          "
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
              />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="experience w-full 992:w-1/2">
            <ResumeTitle resumeTitle="My Experience" className="mb-6 pl-2" />
            <div className="border-primary flex flex-col gap-5 border-l-2 pl-5">
              <Details
                descriptionTitle="Sr. Font End Developer"
                descriptionSubTitle="Apple Inc / 2020 - current
          "
                description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
              />
              <Details
                descriptionTitle="Jr. Font End Developer"
                descriptionSubTitle="Dribbble Inc / 2018 - 2020
          "
                description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.

"
              />
              <Details
                descriptionTitle="HTML Developer"
                descriptionSubTitle="Adobe Inc / 2017 - 2018
          "
                description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
              />
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default Resume;
