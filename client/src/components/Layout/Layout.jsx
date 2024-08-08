// src/components/layout/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import TopHeader from "../common/TopHeader";
import GoUp from "../common/GoUp";
import "../styles/layout.css";

const HomeLayout = () => {
  return (
    <div className="font-bodyFont">
      <Navbar />
      {/* <TopHeader /> */}
      <div className="content">
        <Outlet />
      </div>
      <GoUp />
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayout;
