// src/components/Card.js
import React from "react";
import "../styles/card.css";

const Card = ({ title, imageUrl, links, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} className="card-image" />
      {description && <p>{description}</p>}
    </div>
  );
};

export default Card;
