import React from "react";
import { experience } from "../portfolio";

const Experience = () => {
  return (
    <section id="experience" className="portfolio-section">
      <p className="section-label">04. Experience</p>
      <h2 className="section-heading">Where I&apos;ve Worked</h2>

      <div className="exp-timeline">
        {experience.map((data, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-card">
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                <img
                  src={data.companyLogo}
                  alt={data.company}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    border: "1px solid var(--navy-lighter)",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h3 className="exp-role">{data.role}</h3>
                  <span className="exp-company">@ {data.company}</span>
                </div>
              </div>

              <p className="exp-date">{data.date}</p>
              <p className="exp-desc">{data.desc}</p>

              {data.descBullets && (
                <ul className="exp-bullets">
                  {data.descBullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
