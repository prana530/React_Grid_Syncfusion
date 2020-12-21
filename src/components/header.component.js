import React, { Component } from "react";
import Logo from "./logo.component";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Logo className="logo-top" />
        <Navbar.Brand href="#home">
          <span style={{ marginLeft: "30px" }}></span>SyncFusion-Grid
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">MENU</Nav.Link>

          <Nav.Link href="#pricing" style={{ marginLeft: "500px" }}>
            <small>(Logged in as:)</small> <b>Guest User </b> Sign out
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

const headerstyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
