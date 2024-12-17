import React from "react";
import AboutHero from "./AboutPage/AboutHero";
import AboutOurCards from "./AboutPage/AboutOurCards";
import AboutMenuCards from "./AboutPage/AboutMenuCards";
import AboutClients from "./AboutPage/AboutClients";

const About = () => {
  return <div className="mt-20">
    <AboutHero />

    <AboutOurCards />

    <AboutMenuCards />

    <AboutClients />
  </div>;
};

export default About;
