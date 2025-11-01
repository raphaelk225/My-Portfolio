import React, { useEffect } from 'react';
import AOS from "aos";
import Welcome from './components/welcome';
import Skills from './components/skills';
import Projects from './components/project';
import Formation from './components/formation';
import ContactMe from './components/contact';
import Footer from './components/footer';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
  });
}, []);


  return (
    <div>
      <Welcome />
      <Skills />
      <Projects />
      <Formation />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App
