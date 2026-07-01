import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const navSections = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");
  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main")!);
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {navSections.map(({ label, href }) => (
                  <NavItem key={href}>
                    <NavLink
                      href={href}
                      className="nav-link-icon"
                      style={{ fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.05em" }}
                    >
                      <span className="nav-link-inner--text">{label}</span>
                    </NavLink>
                  </NavItem>
                ))}
                <NavItem className="ml-lg-2">
                  <NavLink
                    className="nav-link-icon"
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    <i className="fa fa-github" />
                    <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
                  </NavLink>
                </NavItem>
                {socialLinks.linkedin && (
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">LinkedIn</span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.twitter && (
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">Twitter</span>
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
