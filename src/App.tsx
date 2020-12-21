import React from "react";
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import Grid from "./components/grid.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
