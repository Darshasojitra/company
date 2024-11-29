import React from "react";
import Navbar from "./navBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return <div className="relative font-custom">
    <Navbar />
    <Outlet />
  </div>;
};

export default Body;
