import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Sidebar = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="portfolio-sidebar">
      <div>
        <a href="#about" style={{ textDecoration: "none" }}>
          <h1 className="sidebar-name">{greetings.name}</h1>
          <h2 className="sidebar-tagline">Backend & AI Engineer</h2>
        </a>
        <p className="sidebar-bio">
          I build scalable web apps and observability integrations for enterprise platforms.
        </p>

        <nav>
          <ul className="sidebar-nav">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`sidebar-nav-link${active === href.replace("#", "") ? " active" : ""}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="sidebar-social">
        {socialLinks.github && (
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa fa-github" />
          </a>
        )}
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa fa-linkedin" />
          </a>
        )}
        {socialLinks.twitter && (
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fa fa-twitter" />
          </a>
        )}
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa fa-instagram" />
          </a>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
