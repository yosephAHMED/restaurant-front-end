import React, { Component } from "react";
import "./views/styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import { FiAlignCenter } from "react-icons/fi";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav_header">
            <Link to="/">
              <img src={logo} alt="logo" class="logo" width="75%" height="75%" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FiAlignCenter className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
