import { useEffect, useState } from 'react';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ventures from './components/Ventures';
import WhatIBuild from './components/WhatIBuild';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technology from './components/Technology';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Game from './components/Game/Game';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  useScrollReveal();

  // Lock body scrolling when interactive game or modal is open
  useEffect(() => {
    if (isGameOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isGameOpen]);

  return (
    <div className="app">
      <Navbar onPlayGame={() => setIsGameOpen(true)} isHidden={hideNavbar} />
      <Starfield />

      <div className="container">
        <Hero id="hero" />

        <main className="main-content">
          <About id="about" />
          <Ventures id="ventures" />
          <WhatIBuild id="what-i-build" />
          <Experience id="experience" />
          <Projects id="projects" onModalChange={setHideNavbar} />
          <Technology id="technology" />
          <Achievements id="achievements" />
          <Blog id="insights" onModalChange={setHideNavbar} />
          <Education id="education" />
          <Contact id="contact" />
        </main>

        <Footer onPlayGame={() => setIsGameOpen(true)} />
      </div>

      {isGameOpen && <Game onClose={() => setIsGameOpen(false)} />}
    </div>
  );
}

export default App;
