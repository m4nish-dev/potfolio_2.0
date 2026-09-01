import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Achievements from './components/Achievements.jsx';
import Certifications from './components/Certifications.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        
        {/* Newspaper Spread: Left and Right Columns */}
        <div className="split-grid">
          {/* Left Column Area */}
          <div className="left-column">
            <About />
          </div>
          
          {/* Right Column Area */}
          <div className="right-column">
            <Projects />
          </div>
        </div>

        {/* Second Spread */}
        <div className="split-grid">
          <div className="left-column" style={{ borderRight: '1px solid var(--black)' }}>
             <Experience />
             <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                <Achievements />
             </div>
          </div>
          <div className="right-column">
            <Skills />
            <Certifications />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
