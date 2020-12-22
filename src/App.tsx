import React from "react";
import "./App.css";
import FooterComponent from "./components/footer.component";
import GridComponent from "./components/grid.component";
import HeaderComponent from "./components/header.coponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <GridComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
