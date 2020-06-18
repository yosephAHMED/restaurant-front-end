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
            children={<Link to="/menu">Menu</Link>}
        />
        <section class="black-bg-reservations"></section>
      </>
    );
  }
}
