import React from "react";
import Footer from "./components/footer.component";
import Grid from "./components/grid.component";
import HeaderComponent from "./components/header.coponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
