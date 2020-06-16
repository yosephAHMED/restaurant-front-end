import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HomePageView } from "../views";

class HomePageContainer extends Component {
    componentDidMount() {
        // do something
    }

    render() {
        return (
            <HomePageView />
        );
    }
}

export default HomePageContainer;