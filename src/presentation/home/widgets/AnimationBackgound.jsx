import React from "react";
import "../styles/AnimationBackground.css";

const AnimatedBackground = ({ children }) => {
  return (
    <div className="animated-background">
      <div className="overlay">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
