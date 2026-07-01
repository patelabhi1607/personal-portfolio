import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { skillsSection } from "../portfolio";

const Skills = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="portfolio-section">
      <p className="section-label">02. Skills</p>
      <h2 className="section-heading">What I Work With</h2>

      {skillsSection.data.map((section, index) => (
        <div className="skill-card" key={index}>
          <div className="skill-card-top-bar" />
          <h3 className="skill-card-title">{section.title}</h3>

          <div className="skill-icon-grid">
            {section.softwareSkills.map((skill, i) => {
              const key = `${index}-${i}`;
              return (
                <div
                  key={i}
                  className="skill-icon-item"
                  onMouseEnter={() => setHovered(key)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Icon icon={skill.iconifyTag} />
                  <span className="skill-icon-tooltip">{skill.skillName}</span>
                </div>
              );
            })}
          </div>

          <div>
            {section.skills.map((skill, i) => (
              <p key={i} className="skill-bullet">
                {typeof skill === "string"
                  ? skill.replace(/^⚡\s*/, "")
                  : skill}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
