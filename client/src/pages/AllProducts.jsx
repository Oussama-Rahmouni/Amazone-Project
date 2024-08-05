import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/products.css";

const AllProducts = () => {
  const location = useLocation();
  const { results } = location.state || [];

  if (!results) {
    return <div>No products found or data not passed correctly.</div>;
  }

  if (results == []) {
    return <div>No products found or data not passed correctly.</div>;
  }

  console.log("hay result", results);
  return (
    <div className="search-container">
      {results.map((product, index) => (
        <div key={index} className="result-container">
          <div className="img-result">
            <img src={product.image_url} alt="" />
          </div>
          <div className="data-result">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
