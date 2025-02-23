import React from "react";

import "../styles/team.css";
import TeamCard from "./team_card";

const teamMembers = [
  {
    name: "Lobar Ashurova",
    role: "Frontend Developer",
    description: "Frontend developer with 3 years of experience specializing in HTML, CSS, JavaScript, React, and Vue.js. Skilled in UI design, responsive layouts, performance optimization, and cross-browser compatibility. Currently mentoring at Learnify, sharing expertise with aspiring developers.",
    image: "/lobar.jpg" 
  },
  {
    name: "Gulira'no Tojimuradova",
    role: "Content Creator",
    description: "Dynamic Content Creator with 2 years of experience in developing and curating engaging content, including text, images,and multimedia. Skilled in integrating content into web pages using HTML, CSS, and JavaScript. Passionate about teaching how to align content with design and functionality..",
    image: "/guli.jpg"
  },
  {
    name: "Ruxshona Baymanova",
    role: "Project Manager",
    description: "Project Manager with 3 years of experience leading cross-functional teams, defining project scopes, and ensuring timely delivery within budget. Skilled in risk management, stakeholder communication, and workflow optimization to enhance efficiency. Experienced in tracking project progress, and resolving roadblocks. Adept at resource allocation, process improvement, and maintaining clear project documentation.",
    image: "/ruxshona.JPG"
  },
  {
    name: "Xurilman Gobenova",
    role: "UI/UX Designer",
    description: "Creative UI/UX Designer with 4 years of experience in crafting user-friendly wireframes, mockups, and prototypes. Proficient in converting designs into HTML and CSS, and enhancing front-end interactivity with JavaScript. Dedicated to guiding students in creating intuitive and engaging user experiences.",
    image: "/xurli.png"
  },
  {
    name: "Akmal Jumayboyev",
    role: "QA Engineer",
    description: "Detail-oriented QA Engineer with 4 years of experience in testing applications, identifying bugs, and ensuring quality standards. Proficient in writing test scripts and automated tests using JavaScript. Committed to mentoring students in debugging, code review, and maintaining high-quality code.",
    image: "/akmal.JPG"
  }
];

const Team = () => {
  return (
    <div className="team-page">
      <h2>Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;