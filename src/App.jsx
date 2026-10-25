import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/CustomCursor/CustomCursor";

const App = () => {
  return (
    <div style={{ background: "#f9f8f5" }}>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
