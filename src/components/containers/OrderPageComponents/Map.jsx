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

  return props.lhsDisplay ? (
    <div>
      {props.map.map((food, item) => (
        <div className="menu-sub-section-item">
          <div className="menu-sub-section-item-name">{food.fooditem}</div>
          <div className="menu-sub-section-item-price">${food.foodprice}</div>
          <div className="menu-sub-section-item-description">
            {food.fooddescription}
          </div>
          <button onClick={(event) => add({ food })}>Add to Cart</button>
        </div>
      ))}
    </div>
  ) : (
    <div>
      {props.map.map((food, item) => (
        <div>
          {food.fooditem}&nbsp;
          <p style={{display: "inline"}}>${food.foodprice}</p>
        </div>
      ))}
    </div>
  );
}
