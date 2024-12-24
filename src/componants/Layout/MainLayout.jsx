import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    
    </div>
  );
};

export default MainLayout;
