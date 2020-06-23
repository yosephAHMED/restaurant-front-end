import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../../store/utilities/actions/cartActions";

class Cart extends Component {
  // remove item completely from cart
  handleRemove = (foodid) => {
    this.props.removeItem(foodid);
  };

  // add quantity to item currently in cart
  handleAddQuantity = (foodid) => {
    this.props.addQuantity(foodid);
  };

  // subtract quantity from item currently in cart
  handleSubtractQuantity = (foodid) => {
    this.props.subtractQuantity(foodid);
  };

  render() {
    let addedItems = this.props.addedItems.length ? (
      this.props.items.map((item) => {
        return (
          <div>
            {item.fooditem}${item.foodprice}
            {item.fooddescription}
            <div>
              <Link to="/order">
                <button
                  onClick={() => {
                    this.handleAddQuantity(item.foodid);
                  }}
                >
                  Increase Quantity
                </button>
              </Link>
              <Link to="/order">
                <button
                  onClick={() => {
                    this.handleSubtractQuantity(item.foodid);
                  }}
                >
                  Decrease Quantity
                </button>
              </Link>
              <button
                onClick={() => {
                  this.handleRemove(item.foodid);
                }}
              >
                Remove Item
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <p>Empty Cart</p>
    );
    return <div>{addedItems};</div>;
  }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (foodid)=>{dispatch(removeItem(foodid))},
        addQuantity: (foodid)=>{dispatch(addQuantity(foodid))},
        subtractQuantity: (foodid)=>{dispatch(subtractQuantity(foodid))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);