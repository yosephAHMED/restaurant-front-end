import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HomePageView } from "../views";
import { Hero } from "../";

class HomePageContainer extends Component {
  componentDidMount() {
    // do something
  }

  render() {
    return (
      <>
        <Hero />
        <HomePageView />
      </>
    );
  }
}

export default HomePageContainer;
