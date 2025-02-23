import React from "react";
import "../styles/FeatureCard.css";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} className="feature-image" />
    </div>
  );
};
export default FeatureCard;
