import React, { Component } from "react";
import { SectionTitle } from ".";
import { BsImages } from "react-icons/bs";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <>
        <div>
          <SectionTitle
            title="A tavola non si invecchia"
            quote='"At the table, you dont get old"'
            subtitle="Located in Staten Island, New York City"
          />
        </div>
        <div className="about_us">
          <div className="about_us_content">
            <header>
              <h4>About us</h4>
              <div/>
            </header>
            <p>
              <a href="/location-hours/">Located </a>
              within the heart of Staten Island, the newly renovated Delish
              Dream Dish restaurant offers a collection of culinary experiences
              that will deliver authentic Italian cuisine made by highly
              experienced Italian chefs. Our menu is updated seasonly so that we
              can always deliver the best ingredients to your plate. We promise
              to create experiences that feel like home - come eat with us.
            </p>
          </div>
          <div className="about_us_picture">
            <Link to="/">
              <BsImages className="circle-icon" />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
