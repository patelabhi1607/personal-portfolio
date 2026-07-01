import React from "react";
import { GithubUserType } from "../types";
import { socialLinks } from "../portfolio";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <div className="github-card" style={{ borderRadius: "8px", marginBottom: "3rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
        <img
          src="/img/abhishek-hero.png"
          alt="Abhishek Patel"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "2px solid var(--teal)",
            flexShrink: 0,
            objectFit: "cover",
            objectPosition: "center 10%",
          }}
        />
        <div style={{ flex: 1 }}>
          <p style={{ color: "var(--slate-lighter)", fontWeight: 700, margin: "0 0 0.4rem", fontSize: "1rem" }}>
            Let&apos;s build something together
          </p>
          <p style={{ color: "var(--slate)", fontSize: "0.85rem", margin: "0 0 0.5rem", lineHeight: 1.6 }}>
            Senior Backend & AI Engineer · Python · FastAPI · Django · LangChain · Splunk · DataDog
          </p>
          {location && (
            <p style={{ color: "var(--slate)", fontSize: "0.8rem", fontFamily: "var(--font-mono)", margin: 0 }}>
              <span style={{ color: "var(--teal)", marginRight: "0.5rem" }}>◆</span>
              {location}
            </p>
          )}
        </div>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-teal"
        >
          <i className="fa fa-github" style={{ marginRight: "0.5rem" }} />
          View Profile
        </a>
      </div>
    </div>
  );
};

export default GithubProfileCard;
