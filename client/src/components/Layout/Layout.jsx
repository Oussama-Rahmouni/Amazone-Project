// src/components/layout/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import TopHeader from "../common/TopHeader";
import useAuth from "../../hooks/useAuth";

const HomeLayout = () => {
  const { user, loading } = useAuth(); // Destructure the user and loading state
  return (
    <div className="font-bodyFont">
      <Navbar user={user} loading={loading} />{" "}
      {/* Pass user and loading to Navbar */}
      <div className="relative z-0">
        <Outlet context={{ user, loading }} />{" "}
        {/* Pass user and loading to Outlet via context */}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
