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
                src="/images/nsut_building.jpg" 
                alt="NSUT Campus" 
                className="article-image"
              />
              <div className="image-caption">NSUT</div>
            </div>
            
            <div className="edu-text">
              <h3 className="edu-title">
                <img src="/images/nsut_logo.png" alt="NSUT Logo" className="edu-logo-inline" /> 
                Netaji Subhas University of Technology
              </h3>
              <p className="edu-meta">B.Tech in CSDA &bull; Delhi</p>
            </div>
          </div>

          <hr className="newspaper-divider" />

          {/* Secondary Schooling Focus */}
          <div className="edu-secondary-block">
            <h4 className="edu-subtitle">Prior Schooling</h4>
            
            <div className="school-item">
              <img src="/images/st_karens_logo.png" alt="St. Karen's Logo" className="school-logo-img" />
              <div className="school-details">
                <span className="school-name">St. Karen's High School</span>
                <span className="school-meta">Class 12th (Senior Secondary) &bull; Science Focus</span>
              </div>
            </div>

            <div className="school-item">
              <img src="/images/st_karens_logo.png" alt="St. Karen's Logo" className="school-logo-img" />
              <div className="school-details">
                <span className="school-name">St. Karen's High School</span>
                <span className="school-meta">Class 10th (Secondary)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
