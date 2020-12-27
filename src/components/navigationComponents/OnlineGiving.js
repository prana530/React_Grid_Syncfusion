import { sign } from "crypto";
import React from "react";
import SignInMessageComponent from "../signInMessage.component";

function OnlineGiving({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className="card mx-auto mt-5 bg-light " style={{ width: "90rem" }}>
        <div className="card-body ">
          <h5 className="card-title m-2 text-primary">Online Giving module</h5>
          <p className="card-text p-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.Some quick example text to build on the
            card title and make up the bulk of the card's content.Some quick
            example text to build on the card title and make up the bulk of the
            card's content.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SignInMessageComponent />
      </div>
    );
  }
}

export default OnlineGiving;
