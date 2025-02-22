import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => (
  <section className="hero">
    <div className="hero-text">
      <h1>Learn the technology of future</h1>
      <button className="cta-btn">Get Started</button>
    </div>
    <div className="hero-image">
      <img src="/hero_image.png" alt="Future technology" />
    </div>
  </section>
);

export default HeroSection;
