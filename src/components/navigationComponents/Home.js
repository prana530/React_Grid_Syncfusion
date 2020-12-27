import React from "react";

function Home({ isLoggedIn }) {
  return (
    <div className="card mx-auto mt-5 text-white bg-info" style={{ width: "90rem" }}>
      <div className="card-body ">
        <h5 className="card-title m-2 ">
          {  isLoggedIn?"Welcome Registered User":"Welcome Guest User" }
        </h5>
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
}

export default Home;
