import React, { useState } from "react";
import "./App.css";
import FooterComponent from "./components/footer.component";
import GridComponent from "./components/grid.component";
import HeaderComponent from "./components/header.coponent";

function App() {
  const [isLoggedIn, handleLoggIn] = useState(false);
  const handleChange = (e: any) => {
     handleLoggIn(isLoggedIn ? false : true);
  };

  return (
    
    <div className="App">
      <HeaderComponent handleButtonClickAtApp={handleChange}  isLoggedIn={isLoggedIn} />
      <GridComponent   isLoggedIn={isLoggedIn} />
      <FooterComponent />
    </div>
  );
}

export default App;
