import React from "react";
import ServiceHero from "./ServicePage/ServiceHero";
import ServiceCards from "./ServicePage/ServiceCards";
import OurClients from "./AboutPage/OurClients";

const Services = () => {
  return <div>
    <ServiceHero />

    <ServiceCards />

    <OurClients />
  </div>;
};

export default Services;
