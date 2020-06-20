import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MenuPageView } from "../views";
import { Hero, Banner } from "../";
import { Link } from "react-router-dom";
import axios from "axios";

class OrderPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      fooditems: [],
      order: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/menu")
      .then((res) => {
        let data = res.data;
        const arr = [];

        data.forEach((element) => {
          arr.push(element);
        });
        this.setState({ fooditems: arr });

        console.log("ARRAY: " + this.state.fooditems);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }

  render() {
    const { fooditems } = this.state;
    return (
      <>
        <Hero hero="orderHero">
          <Banner
            title="Order Now"
            subtitle="Simply select the food you want then checkout"
          >
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </Banner>
        </Hero>

        {fooditems.map((value, k) => (
          <h4 key={k}>
            {" "}
            {value.fooditem}&nbsp;{value.fooddescription}&nbsp;{value.foodprice}
          </h4>
        ))}
      </>
    );
  }
}

export default OrderPageContainer;
