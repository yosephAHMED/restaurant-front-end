import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { Banner } from "../functionComponents";

const MenuPageView = (props) => {
  return (
    <Banner title="our menu" subtitle="quality food made from quality materials">
      <Link to="/" className="btn-primary">
        Return Home
      </Link>
    </Banner>
  );
};

export default MenuPageView;
