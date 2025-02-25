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
import CourseDetail from "./presentation/course_detail/widgets/course_detail";
import Login from "./presentation/login/widgets/login_page";
import SignUp from "./presentation/register/widgets/signup";
import MyCourse from "./presentation/my_course/widgets/my_course";
import PrivacyPolicy from "./presentation/home/widgets/PrivacyPolicy";
import TermsOfService from "./presentation/home/widgets/TermsOfService";
import CookiePolicy from "./presentation/home/widgets/CookiePolicy";





const App = () => {
  return (
    <Router>
  
        <div className="scroll-container">
      
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/course_detail" element={<CourseDetail />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/register" element = {<SignUp />} /> 
            <Route path="/my_course" element = {<MyCourse />} />
            <Route path="/forgot_password" element = {<ForgotPassword />} />
            <Route path="/verification" element = {<Verification />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
    
        </div>
  
    </Router>
  );
};

const HomePage = () => (
  <>
     <Navbar />
    <HeroSection />
    <FeaturesSection />
    <AboutPlatform />
    <ReadyToStart />
    <Footer />
  </>
);

export default App;
