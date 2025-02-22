import React from "react";
import Navbar from "./presentation/home/widgets/Navbar";
import FeaturesSection from "./presentation/home/widgets/FeaturesSection";
import HeroSection from "./presentation/home/widgets/HeroSection";



const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default App;
