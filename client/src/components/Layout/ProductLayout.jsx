// src/components/layout/Layout.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import TopHeader from "../common/TopHeader";
import "../styles/layout.css";
import ProductsSidebar from "../common/ProductsSidebar";
import HeaderFilter from "./HeaderFilter";

const ProductLayout = () => {
  const [sortOption, setSortOption] = useState("");

  const handleSortData = (e) => {
    setSortOption(e.target.value);
  };
  return (
    <div className="product-layout-container">
      <div className="navbar-layout sticky top-0 z-50">
        <Navbar />
        <HeaderFilter sortOption={sortOption} handleSortData={handleSortData} />
      </div>

      <div className="product-main-content">
        {/* <div className="sidebar-layout ">
          <ProductsSidebar />
        </div> */}

        <div className="product-layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
