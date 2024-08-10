// src/components/layout/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
// import "../styles/layout.css";
import { Outlet } from "react-router-dom";
import TopHeader from "../common/TopHeader";

const HomeLayout = () => {
  return (
    <div className="font-bodyFont">
      <Navbar />
      <div className="retlative z-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
