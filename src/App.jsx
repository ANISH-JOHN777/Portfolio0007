import { useEffect } from 'react';
import Starfield from './components/Starfield';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <Starfield />

      <div className="container">
        <Hero />

        <main className="main-content">
          <About />
          <Skills />
          <Experience />
          <Projects />

          <div className="two-column-grid">
            <Education />
            <Achievements />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
