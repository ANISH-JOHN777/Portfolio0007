import { useEffect, useState } from 'react';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import useScrollReveal from './hooks/useScrollReveal';
import useTheme from './hooks/useTheme';
import './App.css';

function App() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useScrollReveal();

  return (
    <div className="app">
      {isGameOpen && <Game onClose={() => setIsGameOpen(false)} />}
      
      <Navbar onPlayGame={() => setIsGameOpen(true)} theme={theme} />
      
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      
      <Starfield />

      <div className="container">
        <Hero id="hero" />

        <main className="main-content">
          <About id="about" />
          <Skills id="skills" />
          <Experience id="experience" />
          <Projects id="projects" />
          <GitHubStats id="github" />
          <Blog id="blog" />

          <div className="two-column-grid">
            <Education />
            <Achievements />
          </div>

          <Contact id="contact" />
        </main>

        <Footer onPlayGame={() => setIsGameOpen(true)} />
      </div>
    </div>
  );
}

export default App;
