import React from "react";
import { projects } from "../portfolio";

const techTags: Record<string, string[]> = {
  "Real-Time Chat App with AI":  ["FastAPI", "WebSockets", "LangChain", "Llama 3", "Redis", "Docker"],
  "GenAI Document Summarizer":   ["LangChain", "LlamaIndex", "Llama 3", "FastAPI", "Python"],
  "Smart Attendance System":     ["Flask", "Python", "Siamese NN", "OpenCV"],
  "Micro E-Commerce Platform":   ["Django", "Python", "Stripe", "PostgreSQL"],
  "Music Controller (Real-Time)":["Django", "React", "WebSockets", "Channels"],
  "Developer Portfolio":         ["Next.js", "TypeScript", "Bootstrap"],
};

const Projects = () => {
  return (
    <section id="projects" className="portfolio-section">
      <p className="section-label">06. Projects</p>
      <h2 className="section-heading">Things I&apos;ve Built</h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-card-top">
              <span className="project-folder-icon">
                <i className="fa fa-folder-open-o" />
              </span>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fa fa-github" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <i className="fa fa-external-link" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="project-tags">
              {(techTags[project.name] || []).map((tag, j) => (
                <span key={j} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
