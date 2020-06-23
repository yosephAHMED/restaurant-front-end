import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MenuPageView } from "../views";
import { Hero, Banner } from "../functionComponents";
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

  componentDidMount(){

    axios.get("http://localhost:3001/menu").then((res) =>{
      let data = res.data;
      const arr = [];

      data.forEach(element => {
        arr.push(element);
      });
      this.setState({fooditems: arr});

      console.log("ARRAY: " + this.state.fooditems);

    }).catch((err)=>{console.log("Error: " + err)})
  }

  render() {
    const {fooditems} = this.state;
    return (
      <>
        <Hero hero="menuHero">
          <Banner title="our menu" subtitle="quality food made from quality materials">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </Banner>

        </Hero>
      </>
    );
  }
}

export default MenuPageContainer;
