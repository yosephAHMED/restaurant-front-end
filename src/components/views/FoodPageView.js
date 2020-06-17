import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

const FoodPageView = (props) => {
    return (
      <div className="food_page">
        <h1>Hello from FoodPageView!</h1>
      </div>
    );
  };
  
  export default FoodPageView;