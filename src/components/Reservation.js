import React, { Component } from "react";
import { SectionTitle } from ".";
import { Link } from "react-router-dom";

export default class Reservation extends Component {
  render() {
    return (
      <>
        <SectionTitle 
            title="Troppe salse vivande false"
            quote='"Too much sauce means false food"'
            subtitle="Inspired by Flavor and Dedicated to Sustainability"
            children={<Link to="/menu">View Our Menu</Link>}
        />
        <section className="reservation-bg">
          <div className="book-reservations-image">
            <div className="book-reservations-text">
              <h2>Book a Reservation</h2>
              {<Link to="/reservation">Reserve Now</Link>}
            </div>

          </div>
        </section>
      </>
    );
  }
}
