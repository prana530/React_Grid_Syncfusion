import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FooterComponent from "./components/footer.component";
import GridComponent from "./components/grid.component";
import HeaderComponent from "./components/header.coponent";
import Home from "./components/navigationComponents/Home";
import Email from "./components/navigationComponents/Email";
import OnlineGiving from "./components/navigationComponents/OnlineGiving";
import Portal from "./components/navigationComponents/Portal";

function App() {
  const [isLoggedIn, handleLoggIn] = useState(false);
  const handleChange = (e: any) => {
    handleLoggIn(isLoggedIn ? false : true);
  };

  return (
    <div className="App my-auto">
      <Router>
        <HeaderComponent
          handleButtonClickAtApp={handleChange}
          isLoggedIn={isLoggedIn}
        />
        <Switch>
          <Route path="/syncFusion">
            <GridComponent  isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/" exact>
            <Home isLoggedIn={isLoggedIn}/>
          </Route>
          <Route path="/email">
            <Email isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/onlineGiving">
            <OnlineGiving isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/portal">
            <Portal isLoggedIn={isLoggedIn} />
          </Route>
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
