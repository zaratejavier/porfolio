import React from "react"
import "../Styles/Home.css"
import Contact from "./Contact"
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"

const Home = () => {
  return (
    <section className="home">
      {/* Image */}
      <div id="About"><About/></div>

      <div id="Resume" ><Resume/></div>

      <div id="Portfolio" style={{ backgroundColor: "green", padding: "50px" }}><Projects /></div>

      <div id="Contact" style={{ backgroundColor: "orange", padding: "100px" }}><Contact /></div>
      
      {/* discription */}
    </section>
  )
}

export default Home
