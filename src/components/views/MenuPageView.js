import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { Hero, Banner } from "../functionComponents";

const MenuPageView = (props) => {
  return (
    <div className="menu-background">
      <Hero hero="menuHero">
        <Banner
          title="our menu"
          subtitle="quality food made from quality materials"
        >
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>

      <div className="menu-container">

        <div className="menu-container-section-container">
          <div className="menu-container-section-container-name">Appetizers and Salads</div>
        </div>
        <div className="menu-container-sub-section">
          {props.appetizers.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
          {props.appetizers.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
          {props.appetizers.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-container-section-container">
          <div className="menu-container-section-container-name">Entrees</div>
        </div>
        <div className="menu-container-sub-section">
          {props.entrees.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
          {props.entrees.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
          {props.entrees.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-container-section-container">
          <div className="menu-container-section-container-name">Desserts</div>
        </div>
        <div className="menu-container-sub-section">
          {props.desserts.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
          {props.desserts.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
          {props.desserts.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-container-section-container">
          <div className="menu-container-section-container-name">Drinks</div>
        </div>
        <div className="menu-container-sub-section">
          {props.drinks.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
          {props.drinks.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
          {props.drinks.map((food, item) => (
            <div className="menu-container-sub-section-item">
              <div className="menu-container-sub-section-item-name">
                {food.fooditem}
              </div>
              <div className="menu-container-sub-section-item-price">
                ${food.foodprice}
              </div>
              <div className="menu-container-sub-section-item-description">
                {food.fooddescription}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MenuPageView;
