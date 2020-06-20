import React, { Component } from "react";
import "./App.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import { Navbar, Footer } from "../components/functionComponents";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar/>
        <header className="app-header">
          <RoutesContainer />
        </header>
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;
