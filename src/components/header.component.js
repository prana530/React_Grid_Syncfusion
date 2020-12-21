import React, { Component } from "react";
import Logo from "./logo.component";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark"  expand="lg" fixed="top">
        <Logo className="logo-top" />
        <Navbar.Brand href="#home" >SyncFusion-Grid</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features" >MENU</Nav.Link>
          <Nav.Link href="#pricing"  >
            Logged in as: <b>Guest User: </b> Loggout
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
