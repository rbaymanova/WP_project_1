import React from "react";
import "../styles/courses.css";
import AnimatedBackground from "../../home/widgets/AnimationBackgound";
import Footer from "../../home/widgets/Footer";
import { Link, useNavigate } from "react-router-dom"; 



const courses = [
  {
    title: "Frontend Development",
    description: "Learn to build responsive, user-friendly websites using HTML, CSS, JavaScript, React, and Vue.js.",
    image: "/frontend.png",
  },
  {
    title: "Project Management",
    description: "Develop skills to plan, execute, and manage projects.",
    image: "/project_man.png",
  },
  {
    title: "UI/UX Design",
    description: "Master the art of creating visually appealing interfaces by learning prototyping, and design principles.",
    image: "/ui.png",
  },
  {
    title: "Content Creation",
    description: "Learn how to create, publish, distribute, and monetize all forms of content.",
    image: "/front.png",
  },
  {
    title: "QA Testing",
    description: "Master the art of creating visually appealing interfaces by learning prototyping, and design principles.",
    image: "/front.png",
  },
];


const CoursePage = () => {

  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate("/course_detail"); 
  };
  return (
      <div className="courses-container">
        <h1>Our Courses</h1>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} />
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <button className="course-card button" onClick={() => handleLoginClick()}>
          Get Started
        </button>
            </div>
          ))}
        </div>
      </div>
  );
};

export default CoursePage

