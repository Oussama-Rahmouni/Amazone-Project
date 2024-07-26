// src/components/Card.js
import React from "react";
import "../styles/homeCategories.css";
import { Link } from "react-router-dom";

const HomeCategories = ({ categories }) => {
  // console.log("here ", categories);
  return categories?.map((category, index) => (
    <div className="cardid" key={index}>
      <h3>{category.name}</h3>
      <Link to={`/category/${category.name}`}>
        <img
          src={category.image_url}
          alt={category.name}
          className="card-image"
        />
      </Link>
      {category.description && <p>{category.description}</p>}
    </div>
  ));
};

export default HomeCategories;
