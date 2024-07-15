import React from "react";
import "./styles/main.css";
import ProductCards from "../components/common/ProductCards";

const Products = () => {
  return (
    <>
      <div className="products-filter"></div>
      <div className="products-main">
        <div className="products-sidebar">sidebar</div>
        <div className="products-cards">
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </div>
      </div>
    </>
  );
};

export default Products;
