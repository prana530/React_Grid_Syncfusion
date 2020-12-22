import React, { Component } from "react";
import Logo from "./logo.component";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-secondary fixed-bottom" expand="lg">
          <Logo />
          <p className="text-light">
            Copyright &copy; 2020 React learning bootcamp
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
