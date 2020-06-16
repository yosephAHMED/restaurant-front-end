import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

const MenuPageView = (props) => {
    return (
      <div className="menu_page">
        <h1>Hello from MenuPageView!</h1>
      </div>
    );
  };
  
  export default MenuPageView;