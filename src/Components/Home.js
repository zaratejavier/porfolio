import React from "react"
import "../Styles/Home.css"
import Contact from "./Contact"
import PersonalInfo from "./PersonalInfo"
import Projects from "./Projects"

const Home = () => {
  return (
    <section className="home">
      {/* Image */}
      <h1>Javier Zarate</h1>

      <div id="first" style={{backgroundColor:"red", padding:"100px"}}><PersonalInfo/></div>

      <div id="second" style={{backgroundColor:"blue", padding:"100px"}}><Projects/></div>

      <div id="third" style={{backgroundColor:"green", padding:"100px"}}><Contact/></div>
      
      {/* discription */}
    </section>
  )
}

export default Home

// a {
//   display: inline-block;
//   padding: 5px 7%;
//   text-decoration: none;
// }

// nav, section {
//   display: block;
//   margin: 0 auto;
//   text-align: center;
// }

// nav {
//   width: 350px;
//   padding: 5px;
// }

// section {
//   width: 350px;
//   height: 130px;
//   overflow-y: scroll;
//   border: 1px solid black;
//   font-size: 0; 
//   scroll-behavior: smooth;    /* <----- THE SECRET ---- */
// }

// section div{
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   font-size: 8vw;
// }
// <nav>
//   <a href="#page-1">1</a>
//   <a href="#page-2">2</a>
//   <a href="#page-3">3</a>
// </nav>
// <section>
//   <div id="page-1">1</div>
//   <div id="page-2">2</div>
//   <div id="page-3">3</div>
// </section>