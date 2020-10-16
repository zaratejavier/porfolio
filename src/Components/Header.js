import React from "react"
import { Link } from "react-router-dom"
import "../Styles/Header.css"
import "../Components/Projects"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__name">Javier Zarate</div>
       </Link>
      <div className="header__nav">
        <Link to="/Contact">
          <div className="header__contact">Contact</div>
        </Link>  
        <Link to="/Projects">
          <div className="header__contact">Projects</div>
        </Link>  
      </div>
    </div>
  )
}

export default Header