import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MenuPageView } from "../views";
import { Hero, Banner } from "../functionComponents";
import { Link } from "react-router-dom";
import axios from "axios";

class OrderPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      appetizersArr: [],
      entreesArr: [],
      dessertArr: [],
      drinks: [],
      order: [],
    };
  }

  componentDidMount() {
    let appetizersLink = "http://localhost:3001/menu/appetizer";
    let entreesLink = "http://localhost:3001/menu/entree";
    let dessertLink = "http://localhost:3001/menu/dessert";
    let drinksLink = "http://localhost:3001/menu/drinks";

    const requestAppetizers = axios.get(appetizersLink);
    const requestEntrees = axios.get(entreesLink);
    const requestDessert = axios.get(dessertLink);
    const requestDrinks = axios.get(drinksLink);

    axios
      .all([requestAppetizers, requestEntrees, requestDessert, requestDrinks])
      .then(
        axios.spread((...res) => {
          const responseAppetizers = res[0];
          const responseEntrees = res[1];
          const responseDessert = res[2];
          const responseDrinks = res[3];

          console.log("data in responseAppetizers: ", responseAppetizers.data);

          // do something with the data inside of responses
          // each response should be an array that contains an object for each food
          // that has the corresponding category we were searching for
          // so if we push each response array to our state variable: fooditems
          // we would have an array containing arrays that contain objects

          this.setState({
            appetizersArr: responseAppetizers.data,
            entreesArr: responseEntrees.data,
            dessertArr: responseDessert.data,
            drinksArr: responseDrinks.data,
          });

          // console.log("appetizers state: ", this.state.appetizersArr);
          // console.log("entrees state: ", this.state.entrees);
          // console.log("desserts state: ", this.state.desserts);
          // console.log("drinks state: ", this.state.drinks);
        })
      )
      .catch((err) => {
        console.log("Error: " + err);
      });
  }

  render() {
    const { appetizersArr, entreesArr, dessertsArr, drinksArr } = this.state;
    return (
      <>
        <Hero hero="orderHero">
          <Banner
            title="Order Now"
            subtitle="Authentic Italian Menu in New York"
          />
        </Hero>

        {/* {console.log("appetizers in render: ", appetizersArr)} */}

        <div className="menu-order-container">

          {/* LHS for MENU */}
          <div className="menu-main-container-lhs">

            {/* APPETIZERS AND SALADS SECTION */}
            <div className="menu-section-container">
              <span className="menu-section-container-name">
                APPETIZERS AND SALADS
              </span>
            </div>
            <div className="menu-sub-section">
                 {/* PRINT OUT APPETIZERS ARRAY */}
                {appetizersArr.map((food, item) => (
                  <div className="menu-sub-section-item">
                    <div className="menu-sub-section-item-name">
                      {food.fooditem}
                    </div>
                    <div className="menu-sub-section-item-price">
                      ${food.foodprice}
                    </div>
                    <div className="menu-sub-section-item-description">
                      {food.fooddescription}
                    </div>
                  </div>
                ))}
                {/* END OF APPETIZER ARRAY SECTION */}
            </div>
            {/* END OF APPETIZERS AND SALADS SECTION */}

            {/* ENTREES SECTION */}
            <div className="menu-section-container">
              <span className="menu-section-container-name">
                ENTREES
              </span>
            </div>
            <div className="menu-sub-section">
                 {/* PRINT OUT ENTREES ARRAY */}
                {entreesArr.map((food, item) => (
                  <div className="menu-sub-section-item">
                    <div className="menu-sub-section-item-name">
                      {food.fooditem}
                    </div>
                    <div className="menu-sub-section-item-price">
                      ${food.foodprice}
                    </div>
                    <div className="menu-sub-section-item-description">
                      {food.fooddescription}
                    </div>
                  </div>
                ))}
                {/* END OF ENTREES ARRAY */}
            </div>
            {/* END OF ENTREES SECTION */}

            {/* DESSERTS SECTION */}
            <div className="menu-section-container">
              <span className="menu-section-container-name">
                DESSERTS
              </span>
            </div>
            <div className="menu-sub-section">
                 {/* PRINT OUT DESSERTS ARRAY */}
                {dessertsArr.map((food, item) => (
                  <div className="menu-sub-section-item">
                    <div className="menu-sub-section-item-name">
                      {food.fooditem}
                    </div>
                    <div className="menu-sub-section-item-price">
                      ${food.foodprice}
                    </div>
                    <div className="menu-sub-section-item-description">
                      {food.fooddescription}
                    </div>
                  </div>
                ))}
                {/* END OF DESSERTS ARRAY */}
            </div>
            {/* END OF DESSERTS SECTION */}

            {/* DRINKS SECTION */}
            <div className="menu-section-container">
              <span className="menu-section-container-name">
                DRINKS
              </span>
            </div>
            <div className="menu-sub-section">
                 {/* PRINT OUT DRINKS ARRAY */}
                {drinksArr.map((food, item) => (
                  <div className="menu-sub-section-item">
                    <div className="menu-sub-section-item-name">
                      {food.fooditem}
                    </div>
                    <div className="menu-sub-section-item-price">
                      ${food.foodprice}
                    </div>
                    <div className="menu-sub-section-item-description">
                      {food.fooddescription}
                    </div>
                  </div>
                ))}
                {/* END OF DRINKS ARRAY */}
            </div>
            {/* END OF DRINKS SECTION */}

          </div>
          {/* RHS for ORDER */}
          <div className="order-main-container-rhs">test</div>
        </div>
      </>
    );
  }
}

export default OrderPageContainer;
