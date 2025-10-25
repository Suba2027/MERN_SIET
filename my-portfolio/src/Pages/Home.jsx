 import React from "react";
import "./Home.css"; // optional, for styling your image and layout

const Home = () => {
  return (
    <div className="home-container">
      <div className="image">
        <img
          src="https://via.placeholder.com/320" // replace with your photo path
          alt="SUBALAKSHMI R"
          className="pic"
        />
        <p>Hello! I am Subalakshmi R, a passionate developer and student in ECE.</p>
      </div>
    </div>
  );
};

export default Home;
