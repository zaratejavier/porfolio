import React from "react"
import { Link } from "react-router-dom"
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
            <span className="header__contact">Contact</span>
          </Link>
      
      </div>
    </div>
  )
}

export default Header