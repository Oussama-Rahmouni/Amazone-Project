// src/components/layout/Layout.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const HomeLayout = () => {
  const { user, loading } = useAuth();
  const [sortOption, setSortOption] = useState("");

  const handleSortData = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="font-bodyFont">
      <Navbar user={user} loading={loading} />
      <div className="relative z-0">
        <Outlet context={{ sortOption }} />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
