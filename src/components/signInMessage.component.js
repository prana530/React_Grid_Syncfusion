import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function SignInMessageComponent() {
  return (
    <h4 className="loginGrid ">
      Please <b>Sign In </b>
      <FontAwesomeIcon icon={faExternalLinkAlt} /> to view the details
    </h4>
  );
}

export default SignInMessageComponent;
