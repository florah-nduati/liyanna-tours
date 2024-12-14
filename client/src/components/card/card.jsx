import React from "react";
import "./card.css";

const Card = ({ image, title, description, buttonLabel, buttonLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={buttonLink} className="card-btn">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Card;
