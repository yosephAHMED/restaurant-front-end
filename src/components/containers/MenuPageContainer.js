import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MenuPageView } from "../views";
import { Hero } from "../";

class MenuPageContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Hero hero="menuHero">
          <MenuPageView />
        </Hero>
      </>
    );
  }
}

export default MenuPageContainer;
