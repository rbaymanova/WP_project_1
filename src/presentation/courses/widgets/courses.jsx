import React from "react";
import "../styles/courses.css";
import AnimatedBackground from "../../home/widgets/AnimationBackgound";
import CourseCard from "./course_card";
import Footer from "../../home/widgets/Footer";

const CoursePage = () => {
    return (
      <AnimatedBackground>
        <div className="page-container">
          <div className="content">  
            <h2 className="courses-heading">Explore Our Courses</h2>
            <div className="courses-grid">
              <CourseCard title="Frontend Development" description="Learn HTML, CSS, JavaScript, React." image="/front.png" />
              <CourseCard title="Project Management" description="Develop planning and execution skills." image="/project_man.png" />
              <CourseCard title="UI/UX Design" description="Master prototyping and design principles." image="/ui.png" />
              <CourseCard title="Content Creation" description="Create, publish, and monetize content." image="/frontend.png" />
              <CourseCard title="QA Testing" description="Ensure software quality through testing." image="/frontend.png" />
            </div>
          </div>
        </div>
        <Footer /> {/* Footer outside to always stay at the bottom */}
      </AnimatedBackground>
    );
};

export default CoursePage;
