import React from "react";
import "../styles/course_card.css";

const CourseCard = () => {
  return (
    <div className="course-container">
      {/* Course Card */}
      <div className="course-card">
        <div className="course-image">
          <img src="/frontend.png" alt="Course Illustration" />
        </div>
        <div className="course-info">
          <h2>Frontend Development</h2>
          <p><strong>Mentor:</strong> Lobar Ashurova</p>
          <p><strong>Duration:</strong> 6 months</p>
          <p><strong>Price:</strong> 300,000 sums monthly</p>
          <button className="enroll-btn">Enroll</button>
        </div>
      </div>

      {/* Lessons Progress Section */}
      <div className="course-progress">
        <div className="section-header">Part 1: HTML & CSS</div>
        <div className="lesson-list">
          <LessonItem title="Web Basics & Frontend" progress={0} unlocked />
          <LessonItem title="HTML Essentials" progress={0} unlocked />
          <LessonItem title="CSS Fundamentals" progress={0} unlocked />
          <LessonItem title="Layouts (Flexbox & Grid)" progress={0} />
          <LessonItem title="Responsive Design" progress={0} />
          <LessonItem title="CSS Best Practices" progress={0} />
        </div>

        <div className="section-footer">Part 2: JavaScript</div>
        <div className="lesson-list">
          <LessonItem title="Web Basics & Frontend" progress={0} unlocked />
          <LessonItem title="HTML Essentials" progress={0} unlocked />
          <LessonItem title="CSS Fundamentals" progress={0} unlocked />
          <LessonItem title="Layouts (Flexbox & Grid)" progress={0} />
          <LessonItem title="Responsive Design" progress={0} />
          <LessonItem title="CSS Best Practices" progress={0} />
        </div>
      </div>
    </div>
  );
};

// Lesson Item Component
const LessonItem = ({ title, progress, unlocked }) => {
  return (
    <div className="lesson-item">
      <span className={`icon ${unlocked ? "play-icon" : "lock-icon"}`}>
        {unlocked ? "▶️" : "🔒"}
      </span>
      <span className="lesson-title">{title}</span>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <span className="progress-text">{progress}%</span>
    </div>
  );
};

export default CourseCard;
