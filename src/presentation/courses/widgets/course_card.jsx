import React from "react";
import "../styles/course_card.css"; 
import { useNavigate } from "react-router-dom";

const CourseCard = ({ image, title, description }) => {
    const navigate = useNavigate(); 

    return (
      <div 
        className="course-card" 
        onClick={() => {
          console.log("Card clicked! Navigating to /course_detail");
          navigate("/course_detail"); 
        }} 
        style={{ cursor: "pointer" }} 
      >
        <div className="course-image-container">
          <img src={image} alt={title} className="course-image" />
        </div>
        <div className="course-content">
          <h3 className="course-title">{title}</h3>
          <p className="course-description">{description}</p>
          <button className="join-now" onClick={(e) => e.stopPropagation()}>
            Join now
          </button>
        </div>
      </div>
    );
};

export default CourseCard;
