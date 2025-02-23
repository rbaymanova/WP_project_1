import React from "react";
import "./styles/CoursePage.css";
import Navbar from "../../home/widgets/Navbar";
import Footer from "../../home/widgets/Footer";

const CoursePage = () => {
    return (
      <AnimatedBackground>
        <div className="scroll-container">
          <Navbar />
          <div className="courses-grid">
            <CourseCard
              title="Frontend Development"
              description="Learn to build responsive, user-friendly websites using HTML, CSS, JavaScript, React, and Vue.js."
              image="/front.png" 
            />
            <CourseCard
              title="Project Management"
              description="Develop skills to plan, execute, and manage projects."
              image="/project_man.png"
            />
            <CourseCard
              title="UI/UX Design"
              description="Master the art of creating visually appealing interfaces by learning prototyping and design principles."
              image="/ui.png"
            />
            <CourseCard
              title="Content Creation"
              description="Learn how to create, publish, distribute, and monetize all forms of content."
              image="/frontend.png"
            />
            <CourseCard
              title="QA Testing"
              description="Ensure software quality through testing methodologies and automation."
              image="/frontend.png"
            />
          </div>
          <Footer />
        </div>
      </AnimatedBackground>
    );
  };
export default CoursePage;  