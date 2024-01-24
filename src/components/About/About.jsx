import {
  MainTitle,
  Container,
  Description1,
  UserDetails,
  AnimatedText,
  AllAnswers,
} from "../DefaultExport";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div className="about py-16">
      <Container>
        <MainTitle title1="About Me" title2="Know Me More" />
        <Fade bottom>
          <div className="block 992:flex items-center mt-10 gap-10">
            <div className="w-full text-center 992:text-left 992:w-4/6 1200:w-3/5 mt-4">
              <UserDetails />
              <Description1
                className="mt-4"
                text="I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto."
              />
            </div>
            <div className="w-full  992:w-2/6  992:mt-0 mt-12">
              <AnimatedText />
              <h4 className="text-28 text-center mt-4 font-medium ">
                Years of <span className="font-bold">Experience</span>
              </h4>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="flex pb-4 justify-between mt-12 flex-wrap gap-y-6">
            <AllAnswers question="Name:" answer="Callum Smith" />
            <AllAnswers question="Email:" answer="chat@callum.com" />
            <AllAnswers question="Date of birth:" answer="11 November, 1987" />
            <AllAnswers question="From:" answer="Los Angeles, USA." />
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default About;
