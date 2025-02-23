import React from "react";
 import "../styles/course_card.css"; // Fix the path


const CourseCard = ({ title, description, image }) => {
    return (
      <div className="course-card">
        <img src={image} alt={title} className="course-image" />
        <div className="course-content">
          <h3 className="course-title">{title}</h3>
          <p className="course-description">{description}</p>
          <button className="join-button">Join now</button>
        </div>
      </div>
    );
  };
export default CourseCard;