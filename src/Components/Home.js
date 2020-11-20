import React from "react"
import "../Styles/Home.css"
import Contact from "./Contact"
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"

const Home = () => {
  return (
    <section className="home">
      <div id="About">
        <About />
      </div>

      <div id="Resume" >
        <Resume />
      </div>

      <div id="Portfolio">
        <Projects />
      </div>

      <div id="Contact" >
        <Contact />
      </div>
    </section>
  )
}

export default Home
