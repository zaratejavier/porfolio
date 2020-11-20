import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

function Header() {  
  return (
    <div className="header" >
{/*       
        <div className="Header__name">
          <a className="header__logo" href="#About">
            Javier Zarate
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
        
      </div> */}

     <ul class="topnav">
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