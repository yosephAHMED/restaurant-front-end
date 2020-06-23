import React, { useState } from "react";
import { BsLock } from "react-icons/bs";

export default function Map(props) {
  const add = (e) => {
    const id = e.food.foodid;
    const item = e.fooditem;
    const price = e.foodprice;
    let arr = [];

    arr.push(e.food);

    props.order(e.food);
  };
  const sub = (item) => {

    console.log(item.item);
    let temp = props.mapp;

    temp.splice(item.item,1);
    props.remove(temp);
  }



  return props.lhsDisplay ? (
    <div>
      {props.map.map((food, item) => (
        <div className="menu-sub-section-item">
          <div className="menu-sub-section-item-name">{food.fooditem}</div>
          <div className="menu-sub-section-item-price">${food.foodprice}</div>
          <div className="menu-sub-section-item-description">
            {food.fooddescription}
            <button className="add-to-cart-btn" onClick={(event) => add({ food })}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>
      {props.mapp.map((food, item) => (
        <div>
          {food.fooditem}&nbsp;
          <p style={{display: "inline"}}>${food.foodprice}</p>
          <button className="remove-from-cart-btn" onClick={(event)=> sub({item})}>Remove</button>
        </div>
      ))}
    </div>
  );
}
