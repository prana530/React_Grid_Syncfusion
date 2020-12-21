import React, { Component } from "react";
import Logo from "./logo.component";
import { Navbar, Nav } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar  bg="dark" expand="lg" fixed="bottom"  >
          <Logo className="logo-footer"/>
        </Navbar>
      </div>
    );
  }
}



export default Footer;
