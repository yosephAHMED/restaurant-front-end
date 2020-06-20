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
    let appetizers = "http://localhost:3001/menu/appetizer";
    let entrees = "http://localhost:3001/menu/entrees";
    let dessert = "http://localhost:3001/menu/dessert";
    let drinks = "http://localhost:3001/menu/drinks";

    const requestAppetizers = axios.get(appetizers);
    const requestEntrees = axios.get(entrees);
    const requestDessert = axios.get(dessert);
    const requestDrinks = axios.get(drinks);

    // axios
    //   .get("http://localhost:3001/menu")
    //   .then((res) => {
    //     let data = res.data;
    //     const arr = [];

    //     data.forEach((element) => {
    //       arr.push(element);
    //     });
    //     this.setState({ fooditems: arr });

    //     console.log("ARRAY: " + this.state.fooditems);
    //   })
    //   .catch((err) => {
    //     console.log("Error: " + err);
    //   });

    axios.all([requestAppetizers, requestEntrees, requestDessert, requestDrinks])
    .then(axios.spread((...res) => {
      const responseAppetizers = res[0];
      const responseEntrees = res[1];
      const responseDessert = res[2];
      const responseDrinks = res[3];

      // do something with the data inside of responses
        // each response should be an array that contains an object for each food
        // that has the corresponding category we were searching for
        // so if we push each response array to our state variable: fooditems
        // we would have an array containing arrays that contain objects

      let menuArr = [];
      menuArr.push (
        responseAppetizers, responseEntrees, responseDessert, responseDrinks
      );

      this.setState({ fooditems: menuArr });

      console.log("array containing arrays: " + this.state.fooditems);


    })).catch(err => {
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
