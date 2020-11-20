import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

function Header() {  
  return (
    <div className="header">
     <ul className="topnav">
        <li>
          <a className="header__logo" href="#About"><span>Javier Zarate</span></a>
        </li>
        <li className="right">
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#Contact">Contact</a>
        </li>
        <li className="right">
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#Portfolio">Portfolio</a>
        </li>
        <li className="right">
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#Resume">Resume</a>
        </li>
        <li className="right">
          <a className="header__optionLineTwo" style={{ textDecoration: 'none', color: 'white' }} href="#About">About</a>
        </li>
    </ul> 
    </div>
  );
}

export default Header;