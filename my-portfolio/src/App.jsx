import React from 'react';
import Welcome from './components/welcome';
import Skills from './components/skills';
import Projects from './components/project';
import Formation from './components/formation';
import ContactMe from './components/contact';
import Footer from './components/footer';

function App() {

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
