import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HomePageView } from "../views";
import { Hero, Banner } from "../";

class HomePageContainer extends Component {
  componentDidMount() {
    // do something
  }

  render() {
    return (
      <>
        <Hero>
          <Banner
            title="delish dream dish"
            subtitle="join us for lunch & dinner"
          >
            <Link to="/menu" className="btn-primary">
              View Our Menu
            </Link>
          </Banner>
        </Hero>
        <HomePageView />
      </>
    );
  }
}

export default HomePageContainer;
