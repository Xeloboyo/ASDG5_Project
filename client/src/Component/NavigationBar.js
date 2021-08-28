import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <Link to="/">
        <div className="header__option">
          <span className="header__optionLineOne">Home</span>
        </div>
      </Link>
      <Link to="/restaurants">
        <div className="header__option">
          <span className="header__optionLineOne">Restaurants</span>
        </div>
      </Link>
      <Link to="/reviews">
        <div className="header__option">
          <span className="header__optionLineOne">Reviews</span>
        </div>
      </Link>
      <Link to="/communityPage">
        <div className="header__option">
          <span className="header__optionLineOne">Community Page</span>
        </div>
      </Link>
      <Link to="/login">
        <div className="header__option">
          <span className="header__optionLineOne">Login</span>
        </div>
      </Link>
      <Link to="/register">
        <div className="header__option">
          <span className="header__optionLineOne">Register</span>
        </div>
      </Link>
      <Link to="/logout">
        <div className="header__option">
          <span className="header__optionLineOne">Logout</span>
        </div>
      </Link>
      <Link to="/promotion">
        <div className="header__option">
          <span className="header__optionLineOne">Promotion</span>
        </div>
      </Link>
    </div>
  );
}

export default NavigationBar;
// Home, restaurants, reviews, community page, Login, Register
