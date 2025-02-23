import React from "react";
 import "../styles/course_card.css"; // Fix the path


 const CourseCard = ({ image, title, description }) => {
    return (
      <div className="course-card">
        <div className="course-image-container">
          <img src={image} alt={title} className="course-image" />
        </div>
        <div className="course-content">
          <h3 className="course-title">{title}</h3>
          <p className="course-description">{description}</p>
          <button className="join-now">Join now</button>
        </div>
      </div>
    );
  };
  
  export default CourseCard;