import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./presentation/home/widgets/Navbar";
import FeaturesSection from "./presentation/home/widgets/FeaturesSection";
import HeroSection from "./presentation/home/widgets/HeroSection";
import AboutPlatform from "./presentation/home/widgets/AboutPlatform";
import AnimatedBackground from "./presentation/home/widgets/AnimationBackgound";

import ReadyToStart from "./presentation/home/widgets/ReadyToStart";
import Footer from "./presentation/home/widgets/Footer";
import ProfilePage from "./presentation/profile/widgets/profile_page"; 
import ForgotPassword from "./presentation/forgot_password/widgets/forgot_password";
import Verification from "./presentation/verification/widgets/verification";
import "./App.css";
import CoursePage from "./presentation/courses/widgets/courses";
import Team from "./presentation/mentors/widgets/Team";




const App = () => {
  return (
    <Router>
      <AnimatedBackground>
        <div className="scroll-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </div>
      </AnimatedBackground>
    </Router>
  );
};

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <AboutPlatform />
    <ReadyToStart />
    <Footer />
  </>
);

export default App;
