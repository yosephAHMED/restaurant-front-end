import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { About } from "../";

const HomePageView = (props) => {
  return (
    <>
      <div className="black-bg">
        <About />
      </div>
    </>
  );
};

export default HomePageView;
