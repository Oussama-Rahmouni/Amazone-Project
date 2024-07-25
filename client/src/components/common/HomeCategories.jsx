// src/components/Card.js
import React from "react";
import "../styles/homeCategories.css";

const HomeCategories = ({ categories }) => {
  // console.log("here ", categories);
  return categories?.map((category, index) => (
    <div className="cardid" key={index}>
      <h3>{category.name}</h3>
      <img
        src={category.image_url}
        alt={category.name}
        className="card-image"
      />
      {category.description && <p>{category.description}</p>}
    </div>
  ));
};

export default HomeCategories;
