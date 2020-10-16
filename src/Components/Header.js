import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {  
  return (
    <div className="header">
      
      <Link to={"/"}>
        <div className="header__logo">Javier Zarate </div>
      </Link>
      
      <div className="header__nav">
        
         <Link to={"/Contact"}>
          <div
            className="header__option">
            <span className="header__optionLineTwo">Contact</span>
          </div>
        </Link> 

        
         <Link to={"/Projects"}>
          <div
            className="header__option">
            <span className="header__optionLineTwo">Projects</span>
          </div>
        </Link> 
                
      </div>
    </div>
  );
}

export default Header;