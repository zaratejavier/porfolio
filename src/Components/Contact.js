import React from "react"
import "../Styles/Contact.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Contact = () => {
  return (
    <div className="contact">
        <span style={{fontSize: "50px"}}>Contact</span>
        <span>Shoot me an email or check out my online profiles</span>
        <span><a className="contact__email" href="mailto:zarate.javier.jz@gmai.com">zarate.javier.jz@gmail.com</a></span>

      <a href="https://www.instagram.com/xavi_utes/" target="_blank"> 
        <InstagramIcon />

      </a>


      <a href="https://github.com/zaratejavier" target="_blank"> 
        <GitHubIcon />
      </a>

      <a href="https://www.linkedin.com/in/javier-zarate-b01a04112/" target="_blank"> 
        <LinkedInIcon />
      </a>

      <a href="https://twitter.com/Xavi_radical" target="_blank"> 
        <TwitterIcon />
      </a>

      
      
        <span>This website designed and developed by Javier Zarate View it on <a href="https://github.com/zaratejavier/porfolio" target="_blank">Github</a></span>
        <span>© Javier Zarate 2020</span>
    </div>


  )
}

export default Contact