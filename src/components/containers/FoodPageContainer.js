import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FoodPageView } from "../views";

class FoodPageContainer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <FoodPageView />
        );
    };
}

export default FoodPageContainer;