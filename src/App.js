import React from "react";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Navbar />
      <Hero />
      <Education />
      <Work />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
