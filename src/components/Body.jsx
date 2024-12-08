import React from "react";
import Navbar from "./navBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return <div className="relative font-custom">
    <Navbar />

    <Outlet />
    
    <Footer />
  </div>;
};

export default Body;
