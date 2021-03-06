import React, { Component } from "react";
import { ErrorPageView } from "../views";
import { Hero } from "../functionComponents";

class ErrorPageContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
