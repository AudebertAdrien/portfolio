import React from "react";
import Intro from "./components/intro-section/intro";
import About from "./components/about-section/about";
import Services from "./components/services-section/services";
import Skills from "./components/skills-section/skills";
import Experiences from "./components/experiences-section/experiences";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div>
      <Intro />
      <div className="container">
        <About />
        <Services />
        <Skills />
        <Experiences />
      </div>
      <Footer />
    </div>
  );
}
