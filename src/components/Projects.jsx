import React from 'react';
import ProjectArticle from './ProjectArticle.jsx';
import { PROJECTS } from '../data/portfolioData.js';

function Projects() {
  return (
    <section id="projects" className="projects" aria-label="Projects">
      <div className="section__header">
        <div className="section__label">
          <span className="section__label-mark">Project Focus</span>
          <span className="section__label-num">§ 04</span>
        </div>
        <h2 className="section__title">
          Selected <em>Work</em>
        </h2>
        <p className="section__standfirst">
          Two pieces of shipped software. Each written as a feature — image,
          argument, and the tools it was made with.
        </p>
      </div>

      <div className="projects__list">
        {PROJECTS.map((project, i) => (
          <React.Fragment key={project.number}>
            <ProjectArticle project={project} reverse={i % 2 === 1} />
            {i < PROJECTS.length - 1 && (
              <hr className="projects__divider" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
