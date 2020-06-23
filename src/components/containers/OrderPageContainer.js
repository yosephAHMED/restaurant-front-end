import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MenuPageView } from "../views";
import { Hero, Banner } from "../functionComponents";
import { Link } from "react-router-dom";
import axios from "axios";
import Map from "./OrderPageComponents/Map"
// import { addToCart } from "../../store/utilities/actions/cartActions";
// import { Cart } from "../functionComponents";
import {
  depositCostActionCreator,
  withdrawCostActionCreator,
} from "../../store/utilities/cartReducer";

class OrderPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      appetizersArr: [],
      entreesArr: [],
      dessertsArr: [],
      drinksArr: [],
      order: [],
      lhsDisplay: true,
      orderIn: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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

          // do something with the data inside of responses
          // each response should be an array that contains an object for each food
          // that has the corresponding category we were searching for
          // so if we push each response array to our state variable: fooditems
          // we would have an array containing arrays that contain objects

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

  handleClick = (x) => {
    this.setState({order: [...this.state.order,x], orderIn: true}, ()=>{
    })

    this.props.depositCostAction(Number(x.foodprice));
  }

  savePrice = (x) => {
    console.log("savePrice X: ", Number(x));
    this.props.withdrawCostAction(Number(x));
  }

  handleRemove = (x) => {
    this.setState({order: x}, ()=>{
      console.log(this.state.order)
    })
    if (this.state.order.length == 0){
      this.setState({ orderIn: false });
    }
    // console.log("x foodprice: ", Number(x.foodprice))
    // this.props.withdrawCostAction(Number(x.foodprice));
  }

  orderSubmit = () => {

    let x = 0;

    (this.state.order).forEach(i=>{
      x = x + Number(i.foodprice);
    })
    console.log(this.state.order);

    const obj = {
      orderid: 105,
      status: false,
      username: "xyz",
      price: x,
      orderitems: "random"
    }

    let url ='http://localhost:3001/addorder';
    axios.post(url, { orderid:105, status:false, username:'tito', foodprice: x, orderitems:'random' }).catch((err)=>console.log(err))
  }

  render() {
    const { appetizersArr, entreesArr, dessertsArr, drinksArr, order, lhsDisplay, orderIn } = this.state;
    return (
      <>
        <Hero hero="orderHero">
          <Banner
            title="Order Now"
            subtitle="Authentic Italian Menu in New York"
          />
        </Hero>

        <div className="menu-order-container">
          {/* LHS for MENU */}
          <div className="menu-main-container-lhs">

            {/* APPETIZERS AND SALADS SECTION */}
              <div className="menu-section-container">
                <span className="menu-section-container-name"> APPETIZERS AND SALADS </span>
              </div>
              <div className="menu-sub-section">              
                <Map map={appetizersArr} title="appetizer" lhsDisplay={lhsDisplay} order={this.handleClick}/>
              </div>

            {/* ENTREES SECTION */}
              <div className="menu-section-container">
                <span className="menu-section-container-name">ENTREES</span>
              </div>
              <div className="menu-sub-section">
                <Map map={entreesArr} title="entrees" lhsDisplay={lhsDisplay} order={this.handleClick}/>
              </div>

            {/* DESSERTS SECTION */}
              <div className="menu-section-container">
                <span className="menu-section-container-name">DESSERTS</span>
              </div>
              <div className="menu-sub-section">
                <Map map={dessertsArr} title="desserts" lhsDisplay={lhsDisplay} order={this.handleClick}/>
              </div>

            {/* DRINKS SECTION */}
              <div className="menu-section-container">
                <span className="menu-section-container-name">DRINKS</span>
              </div>
              <div className="menu-sub-section">
                <Map map={drinksArr} title="drinks" lhsDisplay={lhsDisplay} order={this.handleClick}/>
              </div>

          </div>

          {/* RHS for ORDER */}
          <div className="order-main-container-rhs">
            <div className="order-main-container-rhs-center">
              <div className="order-main-container-rhs-center-title">ORDER</div>
              <div className="order-main-container-rhs-center-order-list">
                {/* <Cart /> */}
                <Map mapp={order} title="Orders" lhsDisplay={!lhsDisplay} orderIn={orderIn} del={this.savePrice} remove={this.handleRemove}/>
                ${this.props.balance}
              </div>
              <button className="order-submit-btn" onClick={this.orderSubmit}>Submit Order</button>

            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log("State balance: ", state.balance);
  return {
    balance: state.cartReducer.balance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    depositCostAction(foodprice) {
      dispatch(depositCostActionCreator(foodprice));
    },
    withdrawCostAction(foodprice) {
      dispatch(withdrawCostActionCreator(foodprice));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPageContainer);
