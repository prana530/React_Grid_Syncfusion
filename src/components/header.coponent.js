import React from "react";
import Logo from "./logo.component";

function HeaderComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo />
      <a class="navbar-brand" href="#">
        Tutorial
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#">
            Features
          </a>
          <a class="nav-item nav-link" href="#">
            About Us
          </a>
          <a class="nav-item nav-link " href="#">
            Services
          </a>
        </div>
        <div className="float-right sign-out">
          Logged in as :<b>Guest User</b>
          <a className="nav-link text-danger " href="#">
            Sign Out
          </a>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
