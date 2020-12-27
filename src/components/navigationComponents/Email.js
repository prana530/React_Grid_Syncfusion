import React from "react";
import SignInMessageComponent from "../signInMessage.component";

function Email({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className="card mx-auto mt-5  bg-light" style={{ width: "90rem" }}>
        <div className="card-body ">
          <h5 className="card-title m-2 text-primary">
             Email Module
          </h5>
          <p className="card-text p-5">
            You can attach any type of file to an email message. But keep in
            mind that to view it, recipients will generally need to have the
            same program installed that you used to create the attachment. For
            example, you need to have Microsoft Project installed on your
            computer to view an attachment that was created in Microsoft
            Project.
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

export default Email;
