import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <section id="about" className="newspaper-section">
      <div className="section-content">
        <span className="section-header">FEATURE</span>
        <h2 className="section-title">EDUCATIONAL ESSENCE</h2>
        
        <div className="article-body">
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
          
          <div className="article-text-columns">
            <p className="article-paragraph">
              B.Tech in CSDA at Netaji Subhas University of Technology, Delhi, a premier tech institution known for rigorous engineering education and competitive environment.
            </p>
            <p className="article-paragraph">
              Prior education includes schooling with a focus on science and mathematics, laying the foundation for analytical thinking and problem-solving skills essential for software engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
