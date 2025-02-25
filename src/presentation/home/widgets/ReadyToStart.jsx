import React from "react";
import "../styles/ReadyToStart.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ReadyToStart = () => {
  const navigate = useNavigate();
  return (
    <div className="ready-container">
      <h2>Ready to start learning?</h2>
      <button 
      className="explore-button" 
      onClick={() => navigate("/courses")} // Navigate to Courses Page
    >
      Explore Courses
    </button>
    </div>
  );
};

export default ReadyToStart;
