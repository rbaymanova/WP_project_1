import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo_pro.svg" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Courses</li>
        <li>Our team</li>
      </ul>
      <div className="nav-actions">
          <img src="/lang.svg" alt="Language" />
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
  

export default Navbar;
