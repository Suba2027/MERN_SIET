import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="who">
      <div className="name">
        <h2>SUBALAKSHMI R</h2>
      </div>
      <div className="cont">
        <nav id="mainNav">
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About Me</Link>
          <Link to="/education" className="link">Education</Link>
          <Link to="/projects" className="link">Projects</Link>
          <Link to="/skills" className="link">Skills</Link>
          <Link to="/achievements" className="link">Achievements</Link>
          <Link to="/contact" className="link">Contact</Link>
          <Link to="/experience" className="link">Experience</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
