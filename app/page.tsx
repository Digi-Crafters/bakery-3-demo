import React from "react";
import Hero from "./components/Hero";
import IntroSection from "./components/Intro";
import Features from "./components/Features";
import Menu from "./components/Menu";
import OurStory from "./components/OurStory";
import Contact from "./components/Contact";

const page = () => {
  return (
    <div>
      <Hero />
      <IntroSection />
      <Features/>
      <Menu/>
      <OurStory/>
      <Contact/>
    </div>
  );
};

export default page;
