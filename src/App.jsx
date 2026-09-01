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

        {/* Experience Section - Spans Full Width */}
        <div className="full-width-section">
          <Experience />
        </div>
        
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

        {/* Skills Section - Full Width to balance layout */}
        <div className="full-width-section" style={{ borderTop: 'var(--border-thin)', borderBottom: 'var(--border-thin)' }}>
          <Skills />
        </div>

        {/* Final Spread */}
        <div className="split-grid">
          <div className="left-column">
             <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                <Achievements />
             </div>
          </div>
          
          <div className="right-column">
             <Certifications />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
