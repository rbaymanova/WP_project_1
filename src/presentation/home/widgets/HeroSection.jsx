import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Learn the <br /> technology <br /> of future
        </h1>
        <button className="cta-btn" onClick={() => navigate("/courses")}>
          Get Started
        </button>
      </div>
      <div className="hero-image">
        <img src="/hero_image.png" alt="Future technology" />
      </div>
    </section>
  );
};

export default HeroSection;
