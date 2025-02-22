import React from "react";
import Navbar from "./presentation/home/widgets/Navbar";
import FeaturesSection from "./presentation/home/widgets/FeaturesSection";
import HeroSection from "./presentation/home/widgets/HeroSection";
import AboutPlatform from "./presentation/home/widgets/AboutPlatform";
import AnimatedBackground from "./presentation/home/widgets/AnimationBackgound";
import "./App.css";
import ReadyToStart from "./presentation/home/widgets/ReadyToStart";
import Footer from "./presentation/home/widgets/Footer";




const App = () => {
  return (
    <AnimatedBackground>
      <div className="scroll-container">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <AboutPlatform />
        <ReadyToStart />
        <Footer />
      </div>
    </AnimatedBackground>
  );
};

export default App;
