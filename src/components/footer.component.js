import React, { Component } from "react";
import Logo from "./logo.component";


function FooterComponent(){
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

export default FooterComponent;
