import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Michael Wells</Navbar.Brand>
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
