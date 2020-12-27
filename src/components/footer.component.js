import React from "react";
import Logo from "./logo.component";

function FooterComponent() {
  return (
    <footer className="bg-secondary fixed-bottom  " expand="lg">
      <Logo />
      <p className="text-light">
        Copyright &copy; 2020 React learning bootcamp
      </p>
    </footer>
  );
}

export default FooterComponent;
