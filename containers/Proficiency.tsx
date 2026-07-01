import React from "react";
import { SkillBars } from "../portfolio";

const Proficiency = () => {
  return (
    <section className="portfolio-section" style={{ paddingTop: 0 }}>
      <p className="section-label">03. Proficiency</p>
      <h2 className="section-heading">Skill Levels</h2>

      <div style={{ maxWidth: "560px" }}>
        {SkillBars.map((skill, i) => (
          <div className="proficiency-item" key={i}>
            <div className="proficiency-label">
              <span>{skill.Stack}</span>
              <span>{skill.progressPercentage}%</span>
            </div>
            <div className="proficiency-bar-bg">
              <div
                className="proficiency-bar-fill"
                style={{ width: `${skill.progressPercentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proficiency;
