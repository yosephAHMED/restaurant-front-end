import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MenuPageView } from "../views";
import { Link } from "react-router-dom";
import axios from "axios";

class MenuPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      appetizersArr: [],
      entreesArr: [],
      dessertsArr: [],
      drinksArr: [],
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

          this.setState({
            appetizersArr: responseAppetizers.data,
            entreesArr: responseEntrees.data,
            dessertsArr: responseDessert.data,
            drinksArr: responseDrinks.data,
          });
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
        <MenuPageView
          appetizers={appetizersArr}
          entrees={entreesArr}
          desserts={dessertsArr}
          drinks={drinksArr}
        />
      </>
    );
  }
}

export default MenuPageContainer;
