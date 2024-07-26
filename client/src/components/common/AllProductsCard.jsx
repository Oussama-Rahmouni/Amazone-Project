import React from "react";
import "../styles/main.css";
import { Link } from "react-router-dom";

const AllProductsCard = ({ data }) => {
  return data?.map((product, index) => (
    <div className="all-products-card" key={index}>
      <div className="card-image-left">
        <img
          src={product.image_url}
          alt="this is an image"
          className="all-card-img"
        />
      </div>
      <div className="card-content-right">
        <Link to={`/products/${product.name}`} className="global-link">
          <h1>{product.name}</h1>
        </Link>
        <p>this is the reviews</p>
        <p>In stock {product.stock}</p>
        <h3>{product.price}</h3>
        <button>Add to cart</button>
      </div>
    </div>
  ));
};

export default AllProductsCard;
