import React from "react";
import AboutHero from "./AboutPage/AboutHero";
import AboutOurCards from "./AboutPage/AboutOurCards";
import AboutMenuCards from "./AboutPage/AboutMenuCards";
import OurClients from "./AboutPage/OurClients";

const About = () => {
  return <div className="mt-20">
    <AboutHero />

    <AboutOurCards />

    <AboutMenuCards />

    <OurClients />
  </div>;
};

export default About;
