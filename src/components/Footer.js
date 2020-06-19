import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from ".";
import logo from "../images/Logo.png";

export default class Footer extends Component {
  render() {
    return (
      <>
        <SectionTitle
          title="Finisce tutto a tarallucci e vino"
          quote='"Everything ends with tarallucci and wine"'
          subtitle="Our Goal Is To Create Cherishable Memories"
        />

        <footer className="footer-bg">
          <div className="footer-inner-box">
            <div className="footer-inner-container">
              <div className="footer-row">
                <div className="footer-mid">
                  <div className="footer-mid-box">
                    {/* this section is for links to rest of pages */}
                    <ul className="footer-list">
                      <li className="footer-item">
                        {<Link to="/reservation">Reservations</Link>}
                      </li>
                      <li className="footer-item">
                        {<Link to="/order">Order Online</Link>}
                      </li>
                      <li className="footer-item">
                        {<Link to="/menu">Menu</Link>}
                      </li>
                      <li className="footer-item">
                        {<Link to="/about">About Us</Link>}
                      </li>
                      <li className="footer-item">
                        {<Link to="/contact">Contact</Link>}
                      </li>
                    </ul>
                    <div />

                    {/* this section is for more information about the restaurant */}
                    <ul className="footer-list-restaurant-info">
                      <li className="footer-item-restaurant-info">
                        <Link to="/">
                          <img src={logo} alt="logo" width="50%" height="50%" />
                        </Link>
                      </li>
                      <li className="footer-item-restaurant-info">
                        2800 Victory Blvd, Staten Island, NY 10314
                      </li>
                      <li className="footer-item-restaurant-info">
                        718-252-####
                      </li>
                      <li className="footer-item-restaurant-info">
                        info@delishrestaurant.com
                      </li>
                      <hr className="w250" />
                      <li className="footer-item-restaurant-info">
                        owned and operated by
                      </li>
                      <li className="footer-item-restaurant-info">
                        Yoseph & Gregory
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
