import React from "react";
import Logo from "./logo.component";

import LogginStatus from "./LogginStatus";
import { Link } from "react-router-dom";

function HeaderComponent({ handleButtonClickAtApp, isLoggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo />
      {/* <Link className="navbar-brand" to="/">
        {" "}
        Compass{" "}
      </Link> */}
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
          <Link className="nav-item nav-link active text-dark " to="/">
            {" "}
            Home{" "}
          </Link>{" "}
          <span className="sr-only"></span>
          <Link className="nav-item nav-link text-dark" to="/syncFusion">
            {" "}
            SyncFusion
          </Link>{" "}
          <span className="sr-only"></span>
          <Link className="nav-item nav-link text-dark " to="/onlineGiving">
            {" "}
            Online Giving
          </Link>
          <Link className="nav-item nav-link  text-dark " to="/email">
            {" "}
            Email
          </Link>
          <Link className="nav-item nav-link text-dark " to="/portal">
            {" "}
            Portal
          </Link>
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
