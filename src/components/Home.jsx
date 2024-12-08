import React from "react";
import Feedback from "./HomePage/Feedback";
import FrontPortfolio from "./HomePage/FrontPortfolio";
import FrontServices from "./HomePage/FrontServices";
import FrontAboutUs from "./HomePage/FrontAboutUs";
import FrontMenuCards from "./HomePage/FrontMenuCards";
import Hero from "./HomePage/Hero";
import Stats from "./HomePage/Stats";
import FrontContactUs from "./HomePage/FrontContactUs";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className=" w-4/5 mx-auto my-32">
        <FrontMenuCards />

        <FrontAboutUs />

        <FrontServices />

        <FrontPortfolio />

        <Feedback />

        <Stats />

        <FrontContactUs />
      </div>
    </div>
  );
};

export default Home;
