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
          {/* First Project: AILifeOS (60%) */}
          {project1 && (
            <div className="project-block project-60">
              <div className="project-image-wrapper">
                <img 
                  src={project1.image} 
                  alt={project1.title} 
                  className="project-image"
                />
              </div>
              <h3 className="project-headline">
                {project1.title.toUpperCase()}: {project1.subtitle.replace('\n', ' ').toUpperCase()}
              </h3>
              <p className="project-description">{project1.dispatch}</p>
              
              {project1.features && (
                <ul className="project-features-list">
                  {project1.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Second Project: Homily (40%) */}
          {project2 && (
            <div className="project-block project-40">
              <div className="project-image-wrapper">
                <img 
                  src={project2.image} 
                  alt={project2.title} 
                  className="project-image"
                  style={{ aspectRatio: '3/4' }} /* Making the second image taller and narrower for layout fit */
                />
              </div>
              <h4 className="project-sub-headline">
                {project2.title.toUpperCase()}:<br/>
                {project2.subtitle.replace('\n', ' ').toUpperCase()}
              </h4>
              <p className="project-description">{project2.dispatch}</p>

              {project2.features && (
                <ul className="project-features-list">
                  {project2.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
