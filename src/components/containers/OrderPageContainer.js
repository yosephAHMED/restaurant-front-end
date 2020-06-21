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

    axios.all([requestAppetizers, requestEntrees, requestDessert, requestDrinks])
    .then(axios.spread((...res) => {
      const responseAppetizers = res[0];
      const responseEntrees = res[1];
      const responseDessert = res[2];
      const responseDrinks = res[3];

      // console.log("data in res: ", res);
      console.log("data in responseAppetizers: ", responseAppetizers.data);
      // console.log("data in responseEntrees: ", responseEntrees);
      // console.log("data in responseDessert: ", responseDessert);
      // console.log("data in responseDrinks: ", responseDrinks);

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

      console.log("appetizers state: ", this.state.appetizersArr);
      console.log("entrees state: ", this.state.entrees);
      console.log("desserts state: ", this.state.desserts);
      console.log("drinks state: ", this.state.drinks);

    })).catch(err => {
      console.log("Error: " + err);
    });
  }

  render() {
    const { 
      appetizersArr,
      entreesArr,
      dessertsArr,
      drinksArrArr, 
    } = this.state;
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
        {console.log("appetizers in render: ", appetizersArr)}
        {appetizersArr.map((value, k) => (
          <h4 key={k}>
            {" "}
            {value.fooditem}&nbsp;{value.fooddescription}&nbsp;{value.foodprice}
          </h4>
        ))}

        {entreesArr.map((value, k) => (
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
