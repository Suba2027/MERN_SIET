import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

const Home = () => <h2 style={{ textAlign: "center" }}>Welcome to my Portfolio!</h2>;
const About = () => <h2 style={{ textAlign: "center" }}>About Me</h2>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

