import React from "react";
import Logo from "./logo.component";
import {  faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderComponent() {
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
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="#">
            Features
          </a>
          <a className="nav-item nav-link" href="#">
            About Us
          </a>
          <a className="nav-item nav-link " href="#">
            Services
          </a>
        </div>
        <div className="float-right sign-out">
          Logged in as :<b>Guest User</b>
          <a className="nav-link text-danger " href="#">
            Sign Out
            <FontAwesomeIcon className="ml-1" icon={faSignOutAlt} size="1x" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
