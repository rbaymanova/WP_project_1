import React from "react";
import FeatureCard from "./FeatureCard";
import "../styles/FeaturesSection.css";


const FeaturesSection = () => (
  <section className="features">
    <h2>Why us?</h2>
    <div className="features-grid">
    <FeatureCard
        title="Industry-Relevant Courses"
        description="Learn from experts with real-world applications."
        image="/card1.png"
      />
      <FeatureCard
        title="Personalized Learning"
        description="Courses tailored to your pace and goals."
        image="/card2.png"
      />
      <FeatureCard
        title="Supportive Community"
        description="Connect, collaborate, and grow with peers & mentors."
        image="/card3.png"/>
    </div>  
  </section>
);

export default FeaturesSection;
