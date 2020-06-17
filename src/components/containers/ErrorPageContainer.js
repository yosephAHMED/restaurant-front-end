import React, { Component } from "react";
import { ErrorPageView } from "../views";
import { Hero } from "../";

class ErrorPageContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Hero>
          <ErrorPageView />
        </Hero>
      </>
    );
  }
}

export default ErrorPageContainer;
