import React from "react";
import Auth from "../utils/auth";
import { Container, Navbar, Nav } from "react-bootstrap";

function TopNav() {
  function showLoginOut() {
    if (Auth.loggedIn()) {
      return (
        <Nav.Link href="/" onClick={() => Auth.logout()}>
          Logout
        </Nav.Link>
      );
    } else {
      return (
        <Nav>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="signup">Signup</Nav.Link>
        </Nav>
      );
    }
  }

  return (
    <>
    <Navbar bg="light" expand="sm" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="..."
            className="img-fluid pe-5"
            width="450"
            src={require("../assets/images/tab-logo.svg").default}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>

            {showLoginOut()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default TopNav;
