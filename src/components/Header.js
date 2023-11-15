import React from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";
import Logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
import { useAuth } from "../Contextt/GloballState";

const Header = () => {
  const { basket, user } = useAuth();
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>
      <div className="header-nav">
        <Link to="/Login">
          <div className="header-option">
            <span className="header-optionLineOne">
              Hello {user ? user.email : "user"}
            </span>
            <span className="header-optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} alt="" className="iconbasket" />
            <span className="header-optionLineTwo header-basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
