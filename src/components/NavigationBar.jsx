import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../fonts.css";

function NavigationBar() {
  return (
    <div>
      <style jsx>{`
        .titleFont {
          font-family: "Ubuntu Mono", monospace;
          font-size: 50px;
        }

        .transNav {
          opacity: 0.8;
        }
      `}</style>
      <Navbar
        collapseOnSelect
        className="transNav"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand className="titleFont" href="/">
          Michael Wells
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/projects">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavigationBar;
