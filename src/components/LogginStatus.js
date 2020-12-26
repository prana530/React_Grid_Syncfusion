import React from "react";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LogginStatus({ handleButtonClick, isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className="float-right sign-out">
        <a
          className="nav-link text-danger "
          href="#"
          onClick={handleButtonClick}
        >
          <b> Sign Out</b>
          <FontAwesomeIcon className="ml-1" icon={faSignOutAlt} size="2x" />
        </a>
      </div>
    );
  } else {
    return (
      <div className="float-right sign-out">
        <a
          className="nav-link text-danger "
          href="#"
          onClick={handleButtonClick}
        >
          <b> Sign In</b>
          <FontAwesomeIcon className="ml-1" icon={faSignInAlt} size="2x" />
        </a>
      </div>
    );
  }
}

export default LogginStatus;
