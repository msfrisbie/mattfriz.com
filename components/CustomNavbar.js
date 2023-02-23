import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="px-3">
        <Container className="flex-row w-full" style={{ height: "initial" }}>
          <Navbar.Brand href="/">Matt Frisbie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/publications">Publications</Nav.Link>
              <Nav.Link href="/pieces">Less Serious Publications</Nav.Link>
              <Nav.Link href="/media">Media</Nav.Link>
              <Nav.Link href="https://github.com/msfrisbie" target="_blank">
                Github
              </Nav.Link>
              <Nav.Link href="https://twitter.com/mattfriz" target="_blank">
                Twitter
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/matt-frisbie-65441513/"
                target="_blank"
              >
                LinkedIn
              </Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
