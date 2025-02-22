import React from "react";
import FeatureCard from "./FeatureCard";
import "../styles/FeaturesSection.css";

const FeaturesSection = () => (
  <section className="features">
    <h2>Why us?</h2>
    <div className="features-grid">
      <FeatureCard
        title="5 Free Trial Lessons"
        description="Experience our platform with no commitment. We offer 5 free trial lessons so you can explore our teaching methods and see the value we provide."
      />
      <FeatureCard
        title="Focused and Practical Learning"
        description="Our lessons are designed to be concise and practical, ensuring you gain relevant skills without unnecessary distractions. We focus on what truly matters for your growth."
      />
      <FeatureCard
        title="Everything You Need in One Place"
        description="All resources, materials, and tools are conveniently available on our website. No need to search elsewhere — everything is organized for your seamless learning experience."
      />
    </div>
  </section>
);

export default FeaturesSection;
