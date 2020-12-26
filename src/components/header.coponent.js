import React from "react";
import Logo from "./logo.component";

import LogginStatus from "./LogginStatus"

function HeaderComponent({handleButtonClickAtApp,isLoggedIn}) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo />
      <a className="navbar-brand" href="#">
        Tutorial
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Home <span className="sr-only"></span>
          </a>
          <a className="nav-item nav-link" href="#">
            Online Giving
          </a>
          <a className="nav-item nav-link" href="#">
            Email
          </a>
          <a className="nav-item nav-link " href="#">
            Portal
          </a>
        </div>
     
        <LogginStatus handleButtonClick={ handleButtonClickAtApp} isLoggedIn={isLoggedIn}/>
      </div>
    </nav>
  );
}

export default HeaderComponent;
