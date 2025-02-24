import React from "react";
import "../styles/team_card.css";

const TeamCard = ({ name, role, description, image }) => {
  return (
    <div className="team-card">
      <img 
        src={image} 
        alt={name ? `${name}'s profile picture` : "Team member"} 
        className="team-image"
      />
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-role">{role}</p>
        <p className ="team-description">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
