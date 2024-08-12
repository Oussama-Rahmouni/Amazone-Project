// src/components/layout/Layout.js
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import TopHeader from "../common/TopHeader";
import "../styles/layout.css";
import ProductsSidebar from "../common/ProductsSidebar";
import HeaderFilter from "./HeaderFilter";

const ProductLayout = () => {
  return (
    <div className="product-layout-container">
      <div className="navbar-layout sticky top-0 z-50">
        <Navbar />
        <HeaderFilter />
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
