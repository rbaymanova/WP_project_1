import React from "react";
import CourseCard from "./course_card";
import Navbar from "../../home/widgets/Navbar";
import Footer from "../../home/widgets/Footer";

const CourseDetail = () => {
  return (
    <div className="course-detail">
      <Navbar/>
      <CourseCard/>
      <Footer/>
    </div>
  );
}
export default CourseDetail;