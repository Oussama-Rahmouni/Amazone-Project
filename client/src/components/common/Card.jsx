// src/components/Card.js
import React from "react";
import "../styles/card.css";

const Card = ({ title, imageUrl, links, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        <div className="card-links">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="card-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
