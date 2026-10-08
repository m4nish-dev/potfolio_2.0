import React from 'react';
import { PROJECTS } from '../data/portfolioData.js';
import '../styles/projects.css';

function Projects() {
  const project1 = PROJECTS[0];
  const project2 = PROJECTS[1];

  return (
    <section id="projects" className="newspaper-section project-section">
      <div className="section-content">
        <span className="section-header">PORTFOLIO HIGHLIGHTS</span>
        <h2 className="section-title">PROJECT FOCUS</h2>

        <div className="projects-split-container">
          {/* First Project: AILifeOS (50%) */}
          {project1 && (
            <div className="project-block project-50" style={{ flex: 1, paddingRight: '1.5rem', borderRight: 'var(--border-thin)' }}>
              <div className="project-image-wrapper">
                <img 
                  src={project1.image} 
                  alt={project1.title} 
                  className="project-image"
                />
              </div>
              <h3 className="project-headline" style={{ fontSize: '1.8rem', marginTop: '1rem' }}>
                {project1.title.toUpperCase()}: {project1.subtitle.replace('
', ' ').toUpperCase()}
              </h3>
              <p className="project-description">{project1.dispatch}</p>
              
              {project1.features && (
                <ul className="project-features-list">
                  {project1.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
              
              {project1.liveUrl && project1.liveUrl !== '#' && (
                <a href={project1.liveUrl} target="_blank" rel="noreferrer" style={{ marginTop: '1rem', display: 'inline-block', fontWeight: 'bold', textDecoration: 'underline', color: 'var(--black)' }}>
                  VISIT LIVE SITE ↗
                </a>
              )}
            </div>
          )}

          {/* Second Project: Homely (50%) */}
          {project2 && (
            <div className="project-block project-50" style={{ flex: 1, paddingLeft: '1.5rem' }}>
              <div className="project-image-wrapper">
                <img 
                  src={project2.image} 
                  alt={project2.title} 
                  className="project-image"
                />
              </div>
              <h3 className="project-headline" style={{ fontSize: '1.8rem', marginTop: '1rem' }}>
                {project2.title.toUpperCase()}: {project2.subtitle.replace('
', ' ').toUpperCase()}
              </h3>
              <p className="project-description">{project2.dispatch}</p>

              {project2.features && (
                <ul className="project-features-list">
                  {project2.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
              
              {project2.liveUrl && project2.liveUrl !== '#' && (
                <a href={project2.liveUrl} target="_blank" rel="noreferrer" style={{ marginTop: '1rem', display: 'inline-block', fontWeight: 'bold', textDecoration: 'underline', color: 'var(--black)' }}>
                  VISIT LIVE SITE ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
