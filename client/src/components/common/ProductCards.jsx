// src/components/Card.js
import React from "react";
import "../styles/homeCategories.css";

const ProductsCards = ({ secondProductSet }) => {
  return secondProductSet?.map((product, index) => (
    <div className="cardid" key={index}>
      <h3>{product.name}</h3>
      <img src={product.image_url} alt={product.name} className="card-image" />
      {product.description && <p>{product.description}</p>}
    </div>
  ));
};

export default ProductsCards;
