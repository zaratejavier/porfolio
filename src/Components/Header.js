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

        {/* <Link to={"#first"}>
          <div
            className="header__option">
            <span className="header__optionLineTwo">first</span>
          </div>
        </Link>  */}

        <div className="header__option">
          {/* <span href="#third" className="header__optionLineTwo">third</span> */}
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#first">First</a>
        </div>

        {/* <Link to={"#second"}>
          <div
            className="header__option">
            <span className="header__optionLineTwo">second</span>
          </div>
        </Link>  */}

        <div className="header__option">
          {/* <span href="#third" className="header__optionLineTwo">third</span> */}
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#second">Second</a>
        </div>


        <div className="header__option">
          {/* <span href="#third" className="header__optionLineTwo">third</span> */}
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#third">Third</a>
        </div>
                
      </div>
    </div>
  );
}

export default Header;