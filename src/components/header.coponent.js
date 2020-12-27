import React from "react";
import Logo from "./logo.component";

import LogginStatus from "./LogginStatus";
import { Link } from "react-router-dom";

function HeaderComponent({ handleButtonClickAtApp, isLoggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo />
      <a className="navbar-brand   ">
        <Link to="/"> Compass </Link>
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
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active">
            <Link to="/"> Home </Link> <span className="sr-only"></span>
          </a>
          <a className="nav-item nav-link ">
            <Link to="/syncFusion"> SyncFusion</Link>{" "}
            <span className="sr-only"></span>
          </a>

          <a className="nav-item nav-link">
            <Link to="/onlineGiving"> Online Giving</Link>
          </a>
          <a className="nav-item nav-link">
            <Link to="/email"> Email</Link>
          </a>
          <a className="nav-item nav-link ">
            <Link to="/portal"> Portal</Link>
          </a>
        </div>
        <LogginStatus
          handleButtonClick={handleButtonClickAtApp}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </nav>
  );
}

export default HeaderComponent;
