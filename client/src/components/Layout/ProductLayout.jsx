// src/components/layout/Layout.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import TopHeader from "../common/TopHeader";
import ProductsSidebar from "../common/ProductsSidebar";
import HeaderFilter from "./HeaderFilter";

const ProductLayout = () => {
  const [sortOption, setSortOption] = useState("");

  const handleSortData = (e) => {
    setSortOption(e.target.value);
  };
  return (
    <div className="">
      <div className=" relative top-0 z-50">
        <Navbar />
        <HeaderFilter sortOption={sortOption} handleSortData={handleSortData} />
      </div>

      <div className="">
        <div className="product-layout-content relative z-0">
          <Outlet context={{ sortOption }} />
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
