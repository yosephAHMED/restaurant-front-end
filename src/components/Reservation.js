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
        <section class="black-bg-reservations"></section>
      </>
    );
  }
}
