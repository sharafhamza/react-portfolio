import React from "react";
import {
  About,
  Header,
  Banner,
  Service,
  Resume,
  Skills,
  Hire,
  Footer,
  Faq,
} from "../components/DefaultExport";
import ColorSwitch from "../components/ColorSwitcher/ColorSwitch";

const Home = () => {
  return (
    <div className="font-pop">
      <Header />
      <Banner />
      <About />
      <Service />
      <Resume />
      <Skills />
      <Hire />
      <ColorSwitch />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
