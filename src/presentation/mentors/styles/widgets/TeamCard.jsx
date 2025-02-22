import React from "react";
import "../styles/TeamCard.css"; 

const TeamCard = ({ name, role, description, image }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-image"/>
      <div className="team-info">
        <h3>{name}</h3>
        <p className="team-role">{role}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
