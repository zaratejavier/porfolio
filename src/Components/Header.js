import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {  
  return (
    <div className="header">
      
        <div className="Header__name">
          <a className="header__logo" href="#About">
            <span>Javier Zarate</span>
          </a>
        </div>
      
      <div className="header__nav">
        <div className="header__option">
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#About">About</a>
        </div>

        <div className="header__option">
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#Resume">Resume</a>
        </div>

        <div className="header__option">
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#Portfolio">Portfolio</a>
        </div>


        <div className="header__option">
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#Contact">Contact</a>
        </div>    
        
      </div>
    </div>
  );
}

export default Header;