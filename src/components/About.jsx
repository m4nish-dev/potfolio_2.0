import React from 'react';
import '../styles/about.css';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="newspaper-section">
      <div className="section-content">
        <span className="section-header">FEATURE</span>
        <h2 className="section-title">EDUCATIONAL ESSENCE</h2>
        
        <div className="article-body">
          {/* Main University Focus */}
          <div className="edu-primary-block">
            <div className="article-image-container">
              <img 
                src="/images/nsut.jpg" 
                alt="NSUT Campus" 
                className="article-image"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2070';
                }}
              />
              <div className="image-caption">NSUT</div>
            </div>
            
            <div className="edu-text">
              <h3 className="edu-title">
                <FaGraduationCap className="edu-icon" /> 
                Netaji Subhas University of Technology
              </h3>
              <p className="edu-meta">B.Tech in CSDA &bull; Delhi</p>
              <p className="article-paragraph">
                A premier tech institution known for rigorous engineering education and competitive environment. Laying the foundation for analytical thinking, systems design, and problem-solving skills essential for software engineering.
              </p>
            </div>
          </div>

          <hr className="newspaper-divider" />

          {/* Secondary Schooling Focus */}
          <div className="edu-secondary-block">
            <h4 className="edu-subtitle">Prior Schooling</h4>
            
            <div className="school-item">
              <div className="school-logo">
                <FaSchool />
              </div>
              <div className="school-details">
                <span className="school-name">St. Karen's High School</span>
                <span className="school-meta">Science & Mathematics Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
