import React from "react";
import FeatureCard from "./FeatureCard";


const WhyUsSection = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-3xl font-bold">Why us?</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <FeatureCard
          title="5 Free Trial Lessons"
          description="Experience our platform with no commitment. We offer 5 free trial lessons so you can explore our teaching methods and see the value we provide."
        />
        <FeatureCard
          title="Focused and Practical Learning"
          description="Our lessons are designed to be concise and practical, ensuring you gain relevant skills without unnecessary distractions."
        />
        <FeatureCard
          title="Everything You Need in One Place"
          description="All resources, materials, and tools are available on our website, making learning seamless."
        />
      </div>
    </section>
  );
};

export default WhyUsSection;
