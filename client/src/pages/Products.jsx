import React from "react";
import "./styles/main.css";
import ProductCards from "../components/common/ProductCards";
import AllProductsCard from "../components/common/AllProductsCard";
import { useQuery } from "react-query";
import { getCategoryProducts } from "../services/productService";
import { useParams } from "react-router-dom";

const Products = () => {
  const { name } = useParams();
  const { loading, erros, data } = useQuery({
    queryKey: ["getCategoryProducts"],
    queryFn: () => {
      return getCategoryProducts(name);
    },
  });

  console.log("our data ", data);

  return (
    <>
      <div className="products-filter"></div>
      <div className="products-main">
        <div className="products-sidebar">sidebar</div>
        <div className="products-cards">
          <AllProductsCard data={data} />
        </div>
      </div>
    </>
  );
};

export default Products;
