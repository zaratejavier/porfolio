import React from "react"
import "../Styles/About.css"
import me from "../images/me1.png"


const About = () => {
  return (
    <div className="about"> 
      <div className="about__section">
        <h3 className="about__name">Javier Zarate</h3>
        <img className="about__image"
          src={me}
        /> 
        <p className="about__description">Husband | Father | Software Developer</p>
      </div>  
    </div>
  )
}

export default About