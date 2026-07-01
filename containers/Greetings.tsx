import React, { useEffect, useState } from "react";
import { greetings } from "../portfolio";

const roles = [
  "Backend Engineer",
  "AI / GenAI Engineer",
  "RAG & LLM Specialist",
  "Splunk & DataDog Expert",
  "Distributed Systems Builder",
];

const TypingText = () => {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span>
      <span className="typing-text">{displayed}</span>
      <span className="typing-cursor">|</span>
    </span>
  );
};

const Greetings = () => {
  return (
    <section id="about" className="hero-section">
      <p className="hero-greeting animate-fade-in-up delay-1">Hi, my name is</p>
      <h1 className="hero-name animate-fade-in-up delay-2">{greetings.name}.</h1>
      <h2 className="hero-role animate-fade-in-up delay-3">
        <TypingText />
      </h2>
      <p className="hero-description animate-fade-in-up delay-4">
        {greetings.description}
      </p>
      <div className="hero-cta animate-fade-in-up delay-5">
        {greetings.resumeLink && (
          <a href={greetings.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-outline-teal">
            View Resume
          </a>
        )}
        <a href="#contact" className="btn-outline-teal">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Greetings;
