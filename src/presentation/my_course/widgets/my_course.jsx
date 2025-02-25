import React from "react";
import "../../my_course/styles/my_course.css";
import Footer from "../../home/widgets/Footer";
import { useNavigate } from "react-router-dom"; 


const courses = [
  {
    title: "FrontEnd Development",
    mentor: "Lobar Ashurova",
    progress: 40,
  },
  {
    title: "QA Testing",
    mentor: "Akmal Jumaboyev",
    progress: 20,
  },
  {
    title: "Project Management",
    mentor: "Ruxshona Baymanova",
    progress: 10,
  },
];

const MyCourse = () => {
  const navigate = useNavigate(); 
  return (
    <div className="my-course-page">

      <div className="my-course-content">
        <div className="my-course-container">
          <h1 className="my-course-title">My Courses</h1>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-image"></div> 
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>Mentor: {course.mentor}</p>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="progress-text">{course.progress}%</p>
                  <button className="view-course-btn" onClick={() => navigate("/course_detail")}>View Course</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCourse;
