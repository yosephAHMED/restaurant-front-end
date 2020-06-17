import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";
import { Logo } from "../../images/Logo.png";

const NavBarView = (props) => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/menu" className="nav-link">
        Menu
      </Link>
    </nav>
  );
};

export default NavBarView;
