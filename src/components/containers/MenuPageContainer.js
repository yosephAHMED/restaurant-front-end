import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MenuPageView } from "../views";

class MenuPageContainer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <MenuPageView />
        );
    };
}

export default MenuPageContainer;