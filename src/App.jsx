import { useEffect, useState } from 'react';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import GitHubStats from './components/GitHubStats';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Game from './components/Game/Game';
import ThemeToggle from './components/ThemeToggle';
import TourGuide from './components/TourGuide';
import useScrollReveal from './hooks/useScrollReveal';
import useTheme from './hooks/useTheme';
import './App.css';

function App() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useScrollReveal();

  // Prevent body scroll when game is open
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
      <Navbar onPlayGame={() => setIsGameOpen(true)} theme={theme} isHidden={hideNavbar} />
      <Starfield />

      <div className="container">
        <Hero id="hero" />
        <Metrics id="metrics" />

        <main className="main-content">
          <About id="about" />
          <Skills id="skills" />
          <Experience id="experience" />
          <Projects id="projects" onModalChange={setHideNavbar} />
          <GitHubStats id="github" />
          <Blog id="blog" onModalChange={setHideNavbar} />

          <div className="two-column-grid">
            <Education />
            <Achievements />
          </div>

          <Contact id="contact" />
        </main>

        <Footer onPlayGame={() => setIsGameOpen(true)} />
      </div>

      {isGameOpen && <Game onClose={() => setIsGameOpen(false)} />}
      <TourGuide isHidden={hideNavbar} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} isHidden={hideNavbar} />
    </div>
  );
}

export default App;
