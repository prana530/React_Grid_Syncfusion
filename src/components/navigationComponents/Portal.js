import React from "react";
import SignInMessageComponent from "../signInMessage.component";

function Portal({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className="card mx-auto mt-5  bg-light width80">
        <div className="card-body ">
          <h5 className="card-title m-2 text-primary">Portal Module</h5>
          <p className="card-text p-5">
            “The creation of Anthology is both welcomed and needed to enhance an
            institution’s access to data, analytics and insights, while
            continuing to accelerate the evolution of the technology landscape
            in higher education.”
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

export default Portal;
