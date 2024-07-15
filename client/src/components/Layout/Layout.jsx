// src/components/layout/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import TopHeader from "../common/TopHeader";
import GoUp from "../common/GoUp";

const Layout = () => {
  return (
    <>
      <Navbar />
      <TopHeader />
      <div className="content">
        <Outlet />
      </div>
      <GoUp />
      <Footer />
    </>
  );
};

export default Layout;
