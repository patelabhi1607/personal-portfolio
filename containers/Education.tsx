import React from "react";
import { educationInfo } from "../portfolio";

const Education = () => {
  return (
    <section id="education" className="portfolio-section">
      <p className="section-label">05. Education</p>
      <h2 className="section-heading">Where I Studied</h2>

      {educationInfo.map((info, i) => (
        <div className="edu-card" key={i}>
          <h3 className="edu-school">{info.schoolName}</h3>
          <p className="edu-degree">{info.subHeader}</p>
          <p className="edu-duration">{info.duration}</p>
          {info.grade && <span className="edu-grade">{info.grade}</span>}
          <p style={{ color: "var(--slate)", fontSize: "0.9rem", lineHeight: 1.65 }}>{info.desc}</p>
          {info.descBullets && (
            <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0 0" }}>
              {info.descBullets.map((b, j) => (
                <li
                  key={j}
                  style={{
                    color: "var(--slate)",
                    fontSize: "0.85rem",
                    marginBottom: "0.5rem",
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: "var(--teal)", flexShrink: 0 }}>▹</span>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default Education;
