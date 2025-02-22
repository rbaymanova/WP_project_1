import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/logo_pro.svg" alt="Learnify Logo" className="logo" />
          <div className="social-icons">
            <a href="#" role="button" onClick={(e) => e.preventDefault()} className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" role="button" onClick={(e) => e.preventDefault()} className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" role="button" onClick={(e) => e.preventDefault()} className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" role="button" onClick={(e) => e.preventDefault()} className="social-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-center">
          <div className="footer-links">
            <a href="#" role="button" onClick={(e) => e.preventDefault()}>About Us</a>
            <a href="#" role="button" onClick={(e) => e.preventDefault()}>Community</a>
            <a href="#" role="button" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          </div>
          <div className="footer-links">
            <a href="#" role="button" onClick={(e) => e.preventDefault()}>Courses</a>
            <a href="#" role="button" onClick={(e) => e.preventDefault()}>Contact Us</a>
            <a href="#" role="button" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </div>
          <div className="footer-links">
            <a href="#" role="button" onClick={(e) => e.preventDefault()}>Our Team</a>
            <a href="#" role="button" onClick={(e) => e.preventDefault()}>FAQ</a>
            <a href="#" role="button" onClick={(e) => e.preventDefault()}>Cookie Policy</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Platform | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
