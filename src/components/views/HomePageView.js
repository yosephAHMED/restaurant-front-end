import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

const HomePageView = (props) => {
  return (
    <div className="home_page">
      <h1>Hello from HomePageView!</h1>
    </div>
  );
};

export default HomePageView;
