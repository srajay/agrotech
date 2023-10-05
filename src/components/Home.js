import React from "react";
import HeroSection from "./herosection/HeroSection";
import ServiceSection from "./servicesection/ServiceSection";
import AboutSection from "./aboutsection/AboutSection";
import PrincipleSection from "./principlesection/PrincipleSection";
import PartnerSection from "./partnersection/PartnerSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <PrincipleSection />
      <PartnerSection />
    </>
  );
};

export default Home;
