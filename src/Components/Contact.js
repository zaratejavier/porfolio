import React from "react"
import "../Styles/Contact.css"
import InstagramIcon from '@material-ui/icons/Instagram';

const Contact = () => {
  return (
    <div className="contact">
        <span style={{fontSize: "50px"}}>Contact</span>
        <span>Shoot me an email or check out my online profiles</span>
        <span><a className="contact__email" href="mailto:zarate.javier.jz@gmai.com">zarate.javier.jz@gmail.com</a></span>
        <InstagramIcon/>
        <span>This website designed and developed by Javier Zarate View it on <a href="https://github.com/zaratejavier/porfolio" target="_blank">Github</a></span>
        <span>© Javier Zarate 2020</span>
    </div>


  )
}

export default Contact